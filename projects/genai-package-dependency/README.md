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

Project documents describe collection through the official PyPI metadata API. The public tables contain PyPI project URLs and metadata fields. The collection code is not public, so the exact endpoint sequence and complete acquisition pipeline cannot be reproduced from this folder alone. The files do not contain download counts or package-usage statistics.

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
| Location | Subfolder of `jun5007.github.io` |
| Standalone repository | Not available; the project remains in this portfolio subfolder |
| Cleaned CSV and metrics files | Public in `data/` |
| Documentation | Public in `docs/` and this README |
| Collection, cleaning, and network source code | Not present |
| Notebook | Not present |
| Project type | Team Project |

The files have not been moved or duplicated into a standalone repository.

## Reproducibility

**Code Not Public / Independent Reproduction Is Limited**

The public files support inspection of cleaned outputs and the examples in the data usage guide. No analysis source file (`.py`, `.ipynb`, `.r`, `.Rmd`, `.qmd`, `.js`, or `.ts`) is present in this folder. The original collection, cleaning, and network-generation source code is not included, so the complete pipeline cannot be regenerated end to end.

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

The full analysis workspace also contains a 72,922-row code-structure table, a SQLite database, downloaded distributions, and presentation artifacts. They are intentionally excluded from this public folder. The five public CSV files and JSON/CSV metrics support the examples in the [data usage guide](./docs/master_data_usage_guide.md); no local database or absolute path is required.

## Improvement Direction

- Publish the collection, cleaning, and network-analysis pipeline after ownership and sharing permission are confirmed.
- Add a notebook or executable script with fixed dependencies and input/output definitions.
- Add visible color chips to the network legend and keep node and edge color rules consistent across graphs and presentation materials.
- Add chart captions explaining package-category node colors and dependency edges.

## Data and Licensing Notes

Local absolute paths were removed before public release. Relative paths in the code-structure sample identify files inside the original collection workspace and are retained only as record context.

Package metadata and structural records originate from distributions available through PyPI. Each upstream package retains its own license; this repository does not relicense upstream source code. The public sample contains paths, imports, and symbol names rather than source-code bodies.

This folder does not contain a project-level `LICENSE` or `DATA_LICENSE.md`. The package metadata license field is incomplete for some upstream packages and must not be treated as definitive redistribution permission. Reuse requires a separate review of upstream terms and attribution requirements.

## Links

- [Public data files](./data/)
- [Public data usage guide](./docs/master_data_usage_guide.md)
- [Presentation script](./docs/presentation_script.md)
- [Back to English Profile](https://github.com/jun5007)
- [View English Portfolio](https://jun5007.github.io/)
