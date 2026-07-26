# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-26

### Changed

- **Package catalogue rewritten against the current library family.** Every entry now
  targets the published `22.x` line (the previous catalogue pinned Angular-21-era and
  `0.x` versions — e.g. `utils ^1.2.1` vs the real `22.7.0` — so `ng add ng-hub-ui`
  installed an incompatible stack into Angular 22 workspaces).
- Libraries whose runtime requires another ng-hub-ui package now declare it, so `ng add`
  co-installs it: `utils` for badges, board, buttons, calendar, modal, nav, paginable,
  portal and stepper; `ds` for panels.

### Added

- Catalogue entries for the eight libraries missing from the installer: `badges`,
  `buttons`, `ds`, `forms`, `icons`, `metrics`, `milestones`, `panels`, `toast`.

### Removed

- `accordion` (superseded by `ng-hub-ui-panels`; the npm package is deprecated) and
  `dropdown` (never existed as a standalone package — the dropdown lives in
  `ng-hub-ui-buttons`).

### Fixed

- `repository.url` pointed at a non-existent GitHub org handle (`carlosmorcillo`); it now
  points to `carlos-morcillo/ng-hub-ui`, so the npm "Repository" link resolves.
