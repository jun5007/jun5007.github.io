# Generative AI Package Dependency Network Analysis

Period: 2026.03 - 2026.06  
Topic: Generative AI Python package dependency network analysis

## Overview

This project analyzes how Python packages used in the generative AI ecosystem depend on each other. The analysis combines PyPI metadata, version snapshots, dependency edges, and representative source-code structure data to describe central packages, dependency communities, and structurally similar alternatives.

## Quick Links

- [Public data files](./data/)
- [Public data usage guide](./docs/master_data_usage_guide.md)
- [Presentation script](./docs/presentation_script.md)

## Repository Status

| Item | Current public status |
|---|---|
| Location | Subfolder of `jun5007.github.io` |
| Standalone repository | Not available; the project remains in this portfolio subfolder |
| Cleaned CSV and metrics files | Public in `data/` |
| Documentation | Public in `docs/` and this README |
| Collection / cleaning / network source code | Not present in the public folder |
| Notebook | Not present in the public folder |
| Seokjun Lee's individual contribution | Not specified in the public project records |

The files have not been moved or duplicated into a standalone repository.
The presentation script's collective wording does not establish Seokjun Lee's individual contribution, so no personal task ownership is claimed here.

## Research Questions

- Are popular generative AI packages the same as the packages that are structurally central in dependency networks?
- Which foundational dependencies became more important from 2022 to 2026?
- Which packages used to be central but became relatively less central over time?
- Can structurally similar alternative or competing packages be found within the same ecosystem?

## Data Scope

- 50 generative AI-related Python packages
- 5 categories: LLM API, Framework/Agent, Model Runtime, App/Service, RAG/Vector DB
- 5 time snapshots from 2022 year-end through June 16, 2026 (`2026_current` is a fixed dataset label, not live data)
- 4,509 dependency edge records
- 72,922 code-structure records across 10 selected packages in the full local analysis dataset
- 500 `openai` package code-structure rows available as a public inspection sample
- 1,190 network-analysis result rows

## Public Evidence

- 50 package-profile rows
- 250 package-by-snapshot version rows
- 4,509 source-target dependency-edge rows
- 500 `openai` package code-structure sample rows
- 1,190 centrality, community, and alternative-pair analysis rows

## Reproducibility Status

**Code Not Yet Public / Independent Reproduction Is Limited**

The public files support inspection of the cleaned outputs and the examples in the data usage guide. No analysis source file (`.py`, `.ipynb`, `.r`, `.Rmd`, `.qmd`, `.js`, or `.ts`) is present in this public project folder. The original collection, cleaning, and network-generation source code is not included, so the complete pipeline cannot be regenerated end to end from the public materials alone.

## Methods

- PyPI metadata collection
- Dependency edge parsing
- Snapshot-based version comparison
- Network centrality analysis using degree and PageRank
- Community detection and shared-dependency similarity
- Representative source-code import/symbol structure extraction

## Key Outputs

- Cleaned package profile data
- Snapshot version table
- Dependency edge list
- Code import/symbol structure sample
- Network and alternative-package analysis results
- Machine-readable project summary metrics

## Improvement Notes

- Add visible color chips to the network graph legend so each package category can be matched with the node colors.
- Keep node and edge color rules consistent across the graph, legend, and presentation materials.
- Add a short chart caption explaining that node colors represent package categories and edges represent dependency relationships.

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

The full analysis workspace also contains a 72,922-row code-structure table, a SQLite database, downloaded distributions, and presentation artifacts. They are intentionally excluded from this public portfolio folder. The five public CSV files and JSON/CSV metrics are sufficient for the examples in the [data usage guide](./docs/master_data_usage_guide.md); no local database or absolute path is required.

## Notes

Local absolute paths were removed before public release. Relative paths in the code-structure sample describe source files inside the original collection workspace and are provided only as record context.

Package metadata and structural records originate from distributions available through PyPI. Each upstream package retains its own license; this repository does not relicense upstream source code. The public code-structure sample contains structural fields such as paths, imports, and symbol names rather than source-code bodies.

This portfolio repository does not currently include a project-level `LICENSE` or `DATA_LICENSE.md`. The package metadata license field is incomplete for some upstream packages, so it must not be treated as definitive redistribution permission. Reuse of these files requires a separate review of the relevant upstream terms and attribution requirements.
