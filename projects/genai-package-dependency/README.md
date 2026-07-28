**English** | [한국어](./README.ko.md)

# Generative AI Package Dependency Network Analysis

## Project Overview

- Period: **2026.03–2026.06**
- Type: **Team Project**
- Topic: Generative AI Python package dependency network analysis

This project examines how Python packages in the generative AI ecosystem depend on one another. It combines PyPI metadata, version snapshots, dependency edges, and representative source-code structure records to describe central packages, dependency communities, and structurally similar alternatives.

## Problem

The project explored four questions:

- Are widely recognized generative AI packages also structurally central in dependency networks?
- Which foundational dependencies became more important from 2022 to 2026?
- Which packages became relatively less central over time?
- Can structurally similar alternatives be identified within the same ecosystem?

## Data Source

- Source platform: [PyPI (Python Package Index)](https://pypi.org/)
- Records: project metadata, release histories, and dependency declarations
- Structural data: selected package distributions available through PyPI, parsed for file, import, and symbol structure
- Public snapshot date: **2026-06-16**

Project documents describe collection through the official PyPI metadata API. The public tables contain PyPI project URLs and metadata fields. The original collection and cleaning code is not public, so the exact endpoint sequence and complete acquisition pipeline cannot be reproduced from this folder alone. The canonical repository's public results-analysis Notebook makes no network requests and is not mirrored in this snapshot. The files do not contain download counts or package-usage statistics.

## Data Scope

- 50 generative AI-related Python packages
- 5 categories: LLM API, Framework/Agent, Model Runtime, App/Service, RAG/Vector DB
- 5 time snapshots from the end of 2022 through June 16, 2026 (`2026_current` is a fixed dataset label, not live data)
- 4,509 dependency-edge records
- 72,922 code-structure records for 10 selected packages in the full local analysis dataset
- 500 public `openai` package code-structure sample rows
- 1,190 network-analysis result rows

## Methods

- PyPI metadata collection
- Dependency-edge parsing
- Snapshot-based version comparison
- Degree and PageRank centrality analysis
- Community detection and shared-dependency similarity
- Representative import and symbol structure extraction

## Key Outputs

- 50 package-profile rows
- 250 package-by-snapshot version rows
- 4,509 source-target dependency-edge rows
- 500 public `openai` code-structure sample rows
- 1,190 centrality, community, and alternative-pair analysis rows

## Repository Status

| Item | Public status |
|---|---|
| Location | Preserved subfolder of `jun5007.github.io` |
| Standalone repository | [Available; canonical repository](https://github.com/jun5007/genai-package-dependency-network) |
| Cleaned CSV and metrics files | Public in `data/` |
| Documentation | Public in `docs/` and this README |
| Original collection and cleaning code | Not present |
| Canonical public results-analysis Notebook | [Available in standalone repository](https://github.com/jun5007/genai-package-dependency-network/blob/main/notebooks/01_public_results_analysis.ipynb) |
| Notebook in this preserved subfolder | Not present |
| Project type | Team Project |

This subfolder remains as a preserved public snapshot. The independent
repository now also contains a portfolio-refactored results-analysis Notebook.
That Notebook is not mirrored here. This snapshot still contains only the
cleaned outputs and documentation; the original collection and cleaning code
and raw data remain non-public.

## Reproducibility

**Canonical Results Notebook Public / This Snapshot Remains Outputs-Only**

The standalone repository includes a portfolio-refactored results-analysis Notebook that clean-runs on the six published CSV files. This preserved website snapshot still contains only outputs and documentation; the original collection and cleaning pipeline remains non-public.

## Public Files

```text
data/
  project_summary_metrics.csv
  project_metrics.json
  final_data_01_package_profile.csv
  final_data_02_snapshot_versions.csv
  final_data_03_dependency_edges.csv
  final_data_04_code_structure_sample.csv  # 500 openai-package rows
  final_data_05_model_analysis_results.csv

docs/
  master_data_usage_guide.md
  presentation_script.md
```

## Large Local Artifacts

The full analysis workspace also contains a 72,922-row code-structure table, a SQLite database, downloaded distributions, and private presentation decks or PDFs. They are intentionally excluded from this public folder. The already-public plain-text presentation script remains under `docs/`. The five public CSV files and JSON/CSV metrics support the examples in the [data usage guide](./docs/master_data_usage_guide.md); no local database or absolute path is required.

## Improvement Direction

- Publish the collection, cleaning, and network-analysis pipeline after ownership and sharing permission are confirmed.
- Preserve collection timestamps, parser versions, and edge-layer definitions in any future data refresh.
- Add visible color chips to the network legend and keep node and edge color rules consistent across graphs and presentation materials.
- Add chart captions explaining package-category node colors and dependency edges.

## Data and Licensing Notes

Local absolute paths were removed before public release. Relative paths in the code-structure sample identify files inside the original collection workspace and are retained only as record context.

Package metadata and structural records originate from distributions available through PyPI. Each upstream package retains its own license; this repository does not relicense upstream source code. The public 500-row sample contains relative paths and import-related metadata rather than source-code bodies.

This folder does not contain a project-level `LICENSE` or `DATA_LICENSE.md`. The package metadata license field is incomplete for some upstream packages and must not be treated as definitive redistribution permission. Reuse requires a separate review of upstream terms and attribution requirements.

## Links

- [Public data files](./data/)
- [Public data usage guide](./docs/master_data_usage_guide.md)
- [Presentation script](./docs/presentation_script.md)
- [Back to English Profile](https://github.com/jun5007)
- [View English Portfolio](https://jun5007.github.io/)
