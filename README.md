# ng-hub-ui

[Español](./README.es.md) | **English**

The official installer and entry point for the **ng-hub-ui** family of Angular component libraries. Run a single `ng add ng-hub-ui` command, pick the libraries you need, and let the schematic wire the dependencies into your project.

> This is the umbrella installer package. It does not ship UI components itself — it installs the individual `ng-hub-ui-*` libraries listed below into your application.

## Documentation and Live Examples

This package is part of [Hub UI](https://hubui.dev/), a collection of Angular component libraries for standalone apps.

- Docs: https://hubui.dev/
- Live examples: https://hubui.dev/

## 🧩 Library Family `ng-hub-ui`

`ng-hub-ui` is the family installer. These are the libraries that make up the ecosystem:

- [**ng-hub-ui-accordion**](https://www.npmjs.com/package/ng-hub-ui-accordion) — _deprecated, use [ng-hub-ui-panels](https://www.npmjs.com/package/ng-hub-ui-panels)_
- [**ng-hub-ui-action-sheet**](https://www.npmjs.com/package/ng-hub-ui-action-sheet)
- [**ng-hub-ui-avatar**](https://www.npmjs.com/package/ng-hub-ui-avatar)
- [**ng-hub-ui-board**](https://www.npmjs.com/package/ng-hub-ui-board)
- [**ng-hub-ui-breadcrumbs**](https://www.npmjs.com/package/ng-hub-ui-breadcrumbs)
- [**ng-hub-ui-calendar**](https://www.npmjs.com/package/ng-hub-ui-calendar)
- [**ng-hub-ui-dropdown**](https://www.npmjs.com/package/ng-hub-ui-dropdown)
- [**ng-hub-ui-ds**](https://www.npmjs.com/package/ng-hub-ui-ds)
- [**ng-hub-ui-forms**](https://www.npmjs.com/package/ng-hub-ui-forms)
- [**ng-hub-ui-history**](https://www.npmjs.com/package/ng-hub-ui-history)
- [**ng-hub-ui-milestones**](https://www.npmjs.com/package/ng-hub-ui-milestones)
- [**ng-hub-ui-modal**](https://www.npmjs.com/package/ng-hub-ui-modal)
- [**ng-hub-ui-nav**](https://www.npmjs.com/package/ng-hub-ui-nav)
- [**ng-hub-ui-paginable**](https://www.npmjs.com/package/ng-hub-ui-paginable)
- [**ng-hub-ui-panels**](https://www.npmjs.com/package/ng-hub-ui-panels)
- [**ng-hub-ui-portal**](https://www.npmjs.com/package/ng-hub-ui-portal)
- [**ng-hub-ui-skeleton**](https://www.npmjs.com/package/ng-hub-ui-skeleton)
- [**ng-hub-ui-sortable**](https://www.npmjs.com/package/ng-hub-ui-sortable)
- [**ng-hub-ui-stepper**](https://www.npmjs.com/package/ng-hub-ui-stepper)
- [**ng-hub-ui-utils**](https://www.npmjs.com/package/ng-hub-ui-utils)

---

## 📋 Table of Contents

- [🚀 Installation](#-installation)
- [⚙️ Usage](#️-usage)
- [🛠️ What the schematic does](#️-what-the-schematic-does)
- [🎛️ Options](#️-options)
- [📦 Installable libraries](#-installable-libraries)
- [✋ Manual installation](#-manual-installation)
- [🤝 Contribution](#-contribution)
- [☕ Support](#-support)
- [📄 License](#-license)

---

## 🚀 Installation

The recommended way to add ng-hub-ui to your Angular project is the Angular CLI `ng add` command, which runs the installer schematic interactively:

```bash
ng add ng-hub-ui
```

The Angular CLI fetches the `ng-hub-ui` package and executes its `ng-add` schematic.

## ⚙️ Usage

### Interactive

Running the command with no arguments launches a multi-select prompt:

```bash
ng add ng-hub-ui
```

```
? Which ng-hub-ui libraries do you want to install? (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◯ Accordion
 ◯ Action Sheet
 ◯ Avatar
 ◯ Board
 ◯ Breadcrumbs
 ◯ Calendar
 ◯ Dropdown
 ◯ History
 ◯ Modal
 ◯ Nav
 ◯ Paginable
 ◯ Portal
 ◯ Skeleton
 ◯ Sortable
 ◯ Stepper
 ◯ Utils
```

Select one or more libraries with the space bar and confirm. The schematic resolves the matching npm packages (plus any required dependencies), adds them to your `package.json`, and installs them.

### Non-interactive

You can skip the prompt by passing the libraries directly. Use the short identifiers shown in the prompt (the part before the label), comma-separated or repeated:

```bash
# Comma-separated
ng add ng-hub-ui --libraries=modal,paginable,utils

# Repeated flag
ng add ng-hub-ui --libraries=calendar --libraries=stepper
```

To update `package.json` without triggering the package manager install step:

```bash
ng add ng-hub-ui --libraries=modal --skip-install
```

## 🛠️ What the schematic does

The `ng-add` schematic performs exactly the following steps:

1. **Normalizes the selection.** It accepts the libraries chosen in the prompt or passed via flags (array or comma-separated string), de-duplicates them, and fails with a clear error if the selection is empty or contains an unknown library identifier.
2. **Resolves dependencies.** Each selected library is mapped to its npm package and version range. Required peers are pulled in automatically:
    - `calendar` additionally installs `ng-hub-ui-utils`.
    - `sortable` additionally installs the external package `sortablejs`.
3. **Updates `package.json`.** The resolved packages are added to the `dependencies` section of your project's root `package.json`. Existing entries are left untouched (the schematic never overwrites a version you already have pinned).
4. **Installs packages.** Unless `--skip-install` is provided, it schedules a package install task so your package manager (npm/yarn/pnpm, as detected by the Angular CLI) downloads the new dependencies.
5. **Logs the result**, listing the libraries that were installed.

> **Scope note:** The installer's job is dependency wiring only. It does **not** modify `angular.json`, import providers, register components, or add stylesheet entries. After installation, import and configure each library in your app following its own README (linked above).

## 🎛️ Options

| Option         | Type       | Default | Description                                                                                      |
| -------------- | ---------- | ------- | ------------------------------------------------------------------------------------------------ |
| `--libraries`  | `string[]` | —       | **Required.** Library identifiers to install. Provide via prompt, comma-separated, or repeated.  |
| `--skip-install` | `boolean`  | `false` | Update `package.json` only; skip the package manager install step.                               |

## 📦 Installable libraries

The schematic can install the following libraries. The identifier on the left is what you pass to `--libraries`; transitive packages are added automatically.

| Identifier     | npm package                                                                       | Auto-added dependencies |
| -------------- | --------------------------------------------------------------------------------- | ----------------------- |
| `accordion`    | [ng-hub-ui-accordion](https://www.npmjs.com/package/ng-hub-ui-accordion)          | —                       |
| `action-sheet` | [ng-hub-ui-action-sheet](https://www.npmjs.com/package/ng-hub-ui-action-sheet)    | —                       |
| `avatar`       | [ng-hub-ui-avatar](https://www.npmjs.com/package/ng-hub-ui-avatar)                | —                       |
| `board`        | [ng-hub-ui-board](https://www.npmjs.com/package/ng-hub-ui-board)                  | —                       |
| `breadcrumbs`  | [ng-hub-ui-breadcrumbs](https://www.npmjs.com/package/ng-hub-ui-breadcrumbs)      | —                       |
| `calendar`     | [ng-hub-ui-calendar](https://www.npmjs.com/package/ng-hub-ui-calendar)            | `ng-hub-ui-utils`       |
| `dropdown`     | [ng-hub-ui-dropdown](https://www.npmjs.com/package/ng-hub-ui-dropdown)            | —                       |
| `history`      | [ng-hub-ui-history](https://www.npmjs.com/package/ng-hub-ui-history)              | —                       |
| `modal`        | [ng-hub-ui-modal](https://www.npmjs.com/package/ng-hub-ui-modal)                  | —                       |
| `nav`          | [ng-hub-ui-nav](https://www.npmjs.com/package/ng-hub-ui-nav)                      | —                       |
| `paginable`    | [ng-hub-ui-paginable](https://www.npmjs.com/package/ng-hub-ui-paginable)          | —                       |
| `portal`       | [ng-hub-ui-portal](https://www.npmjs.com/package/ng-hub-ui-portal)                | —                       |
| `skeleton`     | [ng-hub-ui-skeleton](https://www.npmjs.com/package/ng-hub-ui-skeleton)            | —                       |
| `sortable`     | [ng-hub-ui-sortable](https://www.npmjs.com/package/ng-hub-ui-sortable)            | `sortablejs`            |
| `stepper`      | [ng-hub-ui-stepper](https://www.npmjs.com/package/ng-hub-ui-stepper)              | —                       |
| `utils`        | [ng-hub-ui-utils](https://www.npmjs.com/package/ng-hub-ui-utils)                  | —                       |

> Other family packages — such as [`ng-hub-ui-panels`](https://www.npmjs.com/package/ng-hub-ui-panels), [`ng-hub-ui-ds`](https://www.npmjs.com/package/ng-hub-ui-ds), [`ng-hub-ui-forms`](https://www.npmjs.com/package/ng-hub-ui-forms) and [`ng-hub-ui-milestones`](https://www.npmjs.com/package/ng-hub-ui-milestones) — are part of the ecosystem but are not yet wired into the installer. Install them manually (see below).

## ✋ Manual installation

If you prefer not to use the schematic, install any library directly with your package manager:

```bash
npm install ng-hub-ui-modal ng-hub-ui-paginable
```

Then import and configure each library following its own README, linked in the [Library Family](#-library-family-ng-hub-ui) section above. Remember that some libraries have additional dependencies (for example, `ng-hub-ui-calendar` depends on `ng-hub-ui-utils`, and `ng-hub-ui-sortable` depends on `sortablejs`).

## 🤝 Contribution

We welcome all contributions! Here's how you can help:

```bash
# Clone the repository
git clone https://github.com/carlos-morcillo/ng-hub-ui.git
cd ng-hub-ui

# Install dependencies
npm install
```

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to your branch: `git push origin feature/amazing-feature`
5. **Submit** a pull request

Found a bug or have a request? Open an issue: https://github.com/carlos-morcillo/ng-hub-ui/issues

## ☕ Support

Do you like this project? You can support us by buying us a coffee ☕:
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/carlosmorcillo)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT © ng-hub-ui contributors
