# Bilingual Portfolio Maintenance Checklist

Use this checklist whenever facts or links change.

## Core Checklist

- [ ] English README updated
- [ ] Korean README updated
- [ ] Scores and rankings match
- [ ] Project status matches
- [ ] My Contribution matches
- [ ] Limitations match
- [ ] Lessons Learned match
- [ ] Links work in both languages
- [ ] English website updated
- [ ] Korean website updated

## GitHub Documentation

- Update both `README.md` and `README.ko.md`.
- Keep English as the default `README.md`.
- Keep facts, section order, dates, scores, roles, and reproducibility notes aligned.
- Preserve the language selector at the top of both files.
- Point English links to English documents and Korean links to Korean documents.
- Do not add a role, score, publication status, or experience without confirmed evidence.

## Portfolio Website

- Update both `/index.html` and `/ko/index.html`.
- Keep matching section IDs so the language switcher can retain anchors.
- Keep project and profile links in the selected language.
- Update `hreflang="en"`, `hreflang="ko"`, and `hreflang="x-default"` if routes change.
- Check the pages at 1440×900, 768×1024, and 390×844.
- Confirm that the language switcher remains visible and usable on mobile.

## Pre-publish Checks

- Search for stale claims and inconsistent numbers across both languages.
- Run a Markdown table and link check.
- Run a secrets and personal-information scan without printing credentials.
- Verify `git diff --check`.
- After pushing, read each file through the GitHub API and verify both live site routes.
