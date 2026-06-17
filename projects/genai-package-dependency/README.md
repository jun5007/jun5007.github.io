# Generative AI Package Dependency Network Analysis

Period: 2026.03 - 2026.06  
Topic: Generative AI Python package dependency network analysis

## Overview

This project analyzes how Python packages used in the generative AI ecosystem depend on each other. The analysis combines PyPI metadata, version snapshots, dependency edges, and representative source-code structure data to identify central packages, dependency communities, and structurally similar alternatives.

## Research Questions

- Are popular generative AI packages the same as the packages that are structurally central in dependency networks?
- Which foundational dependencies became more important from 2022 to 2026?
- Which packages used to be central but became relatively less central over time?
- Can structurally similar alternative or competing packages be found within the same ecosystem?

## Data Scope

- 50 generative AI-related Python packages
- 5 categories: LLM API, Framework/Agent, Model Runtime, App/Service, RAG/Vector DB
- 5 time snapshots from 2022 year-end to 2026 current point
- 4,509 dependency edge records
- 72,922 code-structure records from representative packages
- 1,190 network/model analysis result rows

## My Role

- Collected package metadata and dependency information from PyPI
- Organized snapshot-based package versions from 2022 to 2026
- Converted `requires_dist` metadata into source-target dependency edges
- Built cleaned master datasets and validation tables
- Structured network-analysis outputs for centrality, community, and alternative-package interpretation

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
- Project summary metrics

## Improvement Notes

- Add visible color chips to the network graph legend so each package category can be matched with the node colors.
- Keep node and edge color rules consistent across the graph, legend, and presentation materials.
- Add a short chart caption explaining that node colors represent package categories and edges represent dependency relationships.

## Published Files

```text
data/
  project_summary_metrics.csv
  project_metrics.json
  final_data_01_package_profile.csv
  final_data_02_snapshot_versions.csv
  final_data_03_dependency_edges.csv
  final_data_04_code_structure_sample.csv
  final_data_05_model_analysis_results.csv

docs/
  master_data_usage_guide.md
  presentation_script.md
```

## Large Local Artifacts

The original project also includes a full code-structure CSV, a SQLite master database, and PDF presentation files. For a cleaner public portfolio repository, this GitHub folder publishes the cleaned summary files and a representative code-structure sample.

## Notes

Local absolute paths in the original dataset were sanitized before publication.
