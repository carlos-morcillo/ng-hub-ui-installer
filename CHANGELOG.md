# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.7] - 2026-09-01

### Changed

- **The `homepage` in the manifest points at this library's own documentation page** rather than at
  the site root. It is the link a registry shows beside the package and the one a reader clicks from
  it, and landing on a front page they then have to search is a worse answer than landing on the
  reference for the package they were already looking at. Metadata only — no code, no types, no
  styles change, and nothing a consumer imports is affected.

## [0.1.6] - 2026-08-30

### Added

- **`action-sheet` joins the catalogue and the prompt.** `ng-hub-ui-action-sheet` reaches the
  registry with `22.0.0` — its first real release, after a scaffold that was never published —
  so `ng add ng-hub-ui` can now offer and install it. The catalogue targets `^22.0.0`; the entry
  needs no co-installs, since the library depends on nothing beyond Angular.

## [0.1.5] - 2026-08-29

### Changed

- **The `breadcrumbs` floor moves to `^22.5.0`.** The previous `^22.4.0` already resolved to the
  new release, so nothing was broken; what the floor now states is where the features live.
  22.5.0 is the version that collapses long trails (`maxItems`), lets a crumb point outside the
  router (`href` / `target` / `rel` / `download`, and the `items` input) and draws the
  design-system focus ring — so an install pinned by this catalogue lands on a version where the
  documentation matches the package.

## [0.1.4] - 2026-08-24

### Added

- **`loading` and `signature` join the catalogue and the prompt.** `ng-hub-ui-signature` has
  been on npm since 22.0.0 (2026-08-14) but the installer never offered it, so anyone wanting
  the signature field had to find the package and install it by hand; `ng-hub-ui-loading`
  22.0.0 is new to the family (spinners, overlays and a fullscreen loading service). The
  catalogue targets `^22.1.1` and `^22.0.0` respectively.
- Co-installs for the two new entries: `loading` pulls in `ng-hub-ui-utils`, and `signature`
  pulls in `ng-hub-ui-forms` — the form-field shell whose contract the signature field
  inherits — plus `ng-hub-ui-utils`.

### Fixed

- **The `ng-hub-ui-utils` floor was below what five libraries require.** The catalogue offered
  `^22.7.0`, which resolves as `>=22.7.0 <23.0.0`, while `nav` peers on `>=22.8.1` and
  `paginable`, `stepper`, `signature` and `loading` peer on `>=22.8.0`. A fresh install usually
  landed on a recent version and hid the mismatch, so it only bit where resolution was pinned —
  an existing lockfile, a stale cache, or a manifest already carrying `^22.7.0` — and then
  failed with `ERESOLVE`. The floor is now `^22.8.1`, the lowest value that satisfies every
  catalogued peer. Consumers are unaffected: the schematic writes a dependency only when the
  key is absent, so an entry already in `package.json` is never rewritten.

## [0.1.3] - 2026-08-17

### Fixed

- **The published package declared no licence.** An absent `license` field is not neutral — a registry reports it as unlicensed, which legally reads as all rights reserved, the most restrictive state possible rather than the most open. The intent was always MIT; it is now stated in `package.json` and carried in a `LICENSE` file that ships with the package.

## [0.1.2] - 2026-07-28

### Changed

- **`ng-hub-ui-utils` is now co-installed for `avatar`, `forms`, `metrics`, `milestones`,
  `panels` and `toast`.** These libraries dropped their private copies of `resolveHubAccent`
  and now import the canonical helper from `ng-hub-ui-utils` (declared as a new peer
  `>=22.7.0`), so the installer adds it automatically. `panels` keeps `ng-hub-ui-ds` and
  gains `ng-hub-ui-utils` on top.
- Catalogue version ranges refreshed to the accompanying releases: `avatar ^22.9.0`,
  `forms ^22.10.0`, `metrics ^22.2.0`, `milestones ^22.3.0`, `panels ^22.10.0`,
  `toast ^22.6.0`.

## [0.1.1] - 2026-07-28

### Added

- `history` returns to the catalogue and the prompt: `ng-hub-ui-history` 22.0.0 is now
  published on npm (it had been withdrawn in 0.1.0 because offering it made
  `npm install` fail with a 404).

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

- Catalogue entries for the nine libraries missing from the installer: `badges`,
  `buttons`, `ds`, `forms`, `icons`, `metrics`, `milestones`, `panels`, `toast`.

### Removed

- `accordion` (superseded by `ng-hub-ui-panels`; the npm package is deprecated),
  `dropdown` (never existed as a standalone package — the dropdown lives in
  `ng-hub-ui-buttons`), `action-sheet` (pre-release scaffold, not yet a real
  library) and `history` (`ng-hub-ui-history` has never been published to npm —
  offering it made `npm install` fail with a 404; it returns once published).

### Fixed

- `repository.url` pointed at a non-existent GitHub org handle (`carlosmorcillo`); it now
  points to `carlos-morcillo/ng-hub-ui`, so the npm "Repository" link resolves.
