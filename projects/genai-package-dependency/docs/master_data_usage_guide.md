# Public Data Usage Guide

이 문서는 공개 저장소에 포함된 CSV와 JSON만으로 생성형 AI Python 패키지 의존성 분석 데이터를 확인하는 방법을 설명합니다. SQLite 데이터베이스나 로컬 절대 경로는 필요하지 않습니다.

공개 자료는 정제된 결과를 확인하고 아래 예제를 실행하는 데 사용할 수 있습니다. 다만 원본 수집·정제·네트워크 생성 코드는 아직 공개되어 있지 않아 전체 파이프라인을 처음부터 다시 생성할 수는 없습니다.

## 공개 데이터 범위

| 파일 | 공개 행 수 | 내용 |
| --- | ---: | --- |
| `final_data_01_package_profile.csv` | 50 | 패키지 분류, PyPI 메타데이터, 최신 버전 |
| `final_data_02_snapshot_versions.csv` | 250 | 50개 패키지 × 5개 분석 시점의 선택 버전 |
| `final_data_03_dependency_edges.csv` | 4,509 | 시점별 `source` → `target` 의존성 엣지 |
| `final_data_04_code_structure_sample.csv` | 500 | `openai` 패키지 코드 구조의 공개 표본 |
| `final_data_05_model_analysis_results.csv` | 1,190 | 노드 지표와 구조적 유사 후보 쌍 |
| `project_summary_metrics.csv` | 11 | 핵심 규모와 공개 범위 지표 |
| `project_metrics.json` | - | 핵심 지표, 상위 노드, 공개 CSV 스키마 |

`code_structure_records = 72,922`는 10개 패키지를 대상으로 한 전체 로컬 분석 데이터의 레코드 수입니다. 공개 저장소에는 저장소 크기와 경로 노출을 줄이기 위해 `openai` 패키지의 500행만 점검용 표본으로 포함합니다. 따라서 이 파일을 10개 패키지 전체의 층화 표본으로 해석하면 안 됩니다.

`2026_current`는 실시간 데이터가 아니라 수집 기준일이 **2026-06-16**인 고정 스냅샷 라벨입니다.

## 빠른 시작

저장소를 복제한 뒤 프로젝트 디렉터리에서 예제를 실행합니다.

```bash
git clone https://github.com/jun5007/jun5007.github.io.git
cd jun5007.github.io/projects/genai-package-dependency
python -m pip install pandas
```

```python
from pathlib import Path
import json
import pandas as pd

DATA_DIR = Path("data")

profiles = pd.read_csv(DATA_DIR / "final_data_01_package_profile.csv")
snapshots = pd.read_csv(DATA_DIR / "final_data_02_snapshot_versions.csv")
edges = pd.read_csv(DATA_DIR / "final_data_03_dependency_edges.csv")
code_sample = pd.read_csv(DATA_DIR / "final_data_04_code_structure_sample.csv")
analysis = pd.read_csv(DATA_DIR / "final_data_05_model_analysis_results.csv")

with (DATA_DIR / "project_metrics.json").open(encoding="utf-8") as file:
    metrics = json.load(file)

print(profiles.shape)
print(snapshots.shape)
print(edges.shape)
print(code_sample.shape)
print(analysis.shape)
```

예상 shape는 순서대로 `(50, 18)`, `(250, 15)`, `(4509, 10)`, `(500, 10)`, `(1190, 16)`입니다.

## 기본 검증

```python
assert len(profiles) == metrics["package_count"] == 50
assert snapshots["snapshot_label"].nunique() == metrics["snapshot_count"] == 5
assert len(edges) == metrics["dependency_edge_count"] == 4_509
assert len(code_sample) == metrics["code_structure_sample_rows"] == 500
assert code_sample["package"].nunique() == metrics["code_structure_sample_package_count"] == 1
assert sorted(code_sample["package"].unique()) == metrics["code_structure_sample_packages"] == ["openai"]
assert len(analysis) == metrics["model_result_rows"] == 1_190

snapshot_dates = (
    snapshots[["snapshot_order", "snapshot_label", "snapshot_date"]]
    .drop_duplicates()
    .sort_values("snapshot_order")
)
print(snapshot_dates.to_string(index=False))
```

## 활용 예시

### 2026년 6월 스냅샷의 PageRank 상위 노드

```python
current_nodes = analysis.loc[
    (analysis["record_type"] == "node_metric")
    & (analysis["snapshot_label"] == "2026_current")
].copy()

top_pagerank = (
    current_nodes.dropna(subset=["pagerank"])
    .nlargest(10, "pagerank")
    [["package", "category", "in_degree", "out_degree", "pagerank"]]
)
print(top_pagerank.to_string(index=False))
```

### 구조적 유사 후보 쌍

```python
alternative_pairs = analysis.loc[
    (analysis["record_type"] == "alternative_pair")
    & (analysis["snapshot_label"] == "2026_current")
].copy()

top_pairs = (
    alternative_pairs.dropna(subset=["alt_score"])
    .nlargest(10, "alt_score")
    [["package_a", "package_b", "category", "shared_dep_count", "alt_score"]]
)
print(top_pairs.to_string(index=False))
```

`alt_score`는 공유 의존성, 네트워크 위치 등 이 데이터셋의 구조 지표를 결합한 비교 점수입니다. 기능의 완전한 대체 가능성이나 품질 우위를 뜻하지 않습니다.

### 런타임 의존성만 집계

```python
runtime_edges = edges.loc[edges["is_runtime_dependency"]].copy()

top_runtime_targets = (
    runtime_edges.groupby(["snapshot_label", "target"])
    .size()
    .rename("edge_count")
    .reset_index()
    .sort_values(["snapshot_label", "edge_count"], ascending=[True, False])
)
print(top_runtime_targets.head(20).to_string(index=False))
```

## 주요 필드

- `snapshot_label`: `2022_end`, `2023_end`, `2024_end`, `2025_end`, `2026_current`
- `source`, `target`: 의존하는 패키지와 의존 대상 패키지
- `dependency_layer`: `runtime` 또는 `optional_extra`
- `record_type`: `node_metric` 또는 `alternative_pair`
- `in_degree`, `out_degree`, `pagerank`, `community`: 네트워크 노드 지표
- `shared_dependency_similarity`, `centrality_balance`, `alt_score`: 후보 쌍 비교 지표

## 해석 시 유의사항

- 데이터는 선택한 50개 생성형 AI 관련 패키지와 5개 시점에 한정됩니다.
- 50개는 분석 대상으로 고른 source/seed 패키지 수입니다. 의존 대상까지 포함하면 `2026_current` 공개 엣지 표에는 540개의 고유 노드가 나타납니다.
- 패키지 메타데이터와 의존성은 수집 시점의 PyPI 정보를 바탕으로 합니다.
- 코드 구조 공개 파일은 72,922행 전체 데이터가 아닌 `openai` 패키지 500행 표본입니다.
- `file_path`는 원본 수집 워크스페이스 내부의 상대 경로이며, 현재 컴퓨터의 실제 경로가 아닙니다.
- 네트워크 중심성이나 `alt_score`는 패키지의 보안성, 유지보수 상태, 기능 품질을 평가하는 지표가 아닙니다.
- PyPI에 배포된 각 패키지는 서로 다른 라이선스를 가질 수 있습니다. 이 데이터는 상위 패키지의 소스 코드를 재라이선스하지 않으며, 재사용 전 각 패키지의 라이선스를 별도로 확인해야 합니다.

파일 구성과 프로젝트 설명은 [프로젝트 README](../README.md)에서 확인할 수 있습니다.
