genai_dependency_network/00_master_input_data/genai_collected_data_master.sqlite")
conn = sqlite3.connect(DB_PATH)

seed_df = pd.read_sql("SELECT * FROM seed_packages_50", conn)
snap_df = pd.read_sql("SELECT * FROM snapshot_versions_raw", conn)
requires_df = pd.read_sql("SELECT * FROM snapshot_requires_dist_raw", conn)
code_symbols_df = pd.read_sql("SELECT * FROM code_symbols_raw", conn)

catalog_df = pd.read_sql("SELECT * FROM data_catalog", conn)
quality_df = pd.read_sql("SELECT * FROM quality_checks", conn)

conn.close()
```

## ??? ???
`04_downloaded_distributions` ?? ??/??? CSV ??? ??? ?? ?? ????? ?? ???? ????.
