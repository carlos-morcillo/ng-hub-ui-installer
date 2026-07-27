import type { PackageMetadata } from './models';

/**
 * Central package catalogue used by prompts, validation, and dependency resolution.
 *
 * Keep every entry aligned with the latest published version of each library
 * (`projects/<lib>/package.json` in the monorepo). Libraries whose runtime peer
 * depends on another ng-hub-ui package declare it in `dependencies` so `ng add`
 * co-installs it.
 */
export const LIBRARY_PACKAGES: Record<string, PackageMetadata> = {
	avatar: { packageName: 'ng-hub-ui-avatar', version: '^22.7.0' },
	badges: {
		packageName: 'ng-hub-ui-badges',
		version: '^22.6.0',
		dependencies: ['utils']
	},
	board: {
		packageName: 'ng-hub-ui-board',
		version: '^22.3.0',
		dependencies: ['utils']
	},
	breadcrumbs: { packageName: 'ng-hub-ui-breadcrumbs', version: '^22.4.0' },
	buttons: {
		packageName: 'ng-hub-ui-buttons',
		version: '^22.9.0',
		dependencies: ['utils']
	},
	calendar: {
		packageName: 'ng-hub-ui-calendar',
		version: '^22.4.0',
		dependencies: ['utils']
	},
	ds: { packageName: 'ng-hub-ui-ds', version: '^22.6.1' },
	forms: { packageName: 'ng-hub-ui-forms', version: '^22.8.0' },
	// NOTE: ng-hub-ui-history is intentionally absent — the package has never been
	// published to npm. Re-add it here (and in schema.json) once it ships.
	icons: { packageName: 'ng-hub-ui-icons', version: '^22.1.0' },
	metrics: { packageName: 'ng-hub-ui-metrics', version: '^22.1.0' },
	milestones: { packageName: 'ng-hub-ui-milestones', version: '^22.2.0' },
	modal: {
		packageName: 'ng-hub-ui-modal',
		version: '^22.4.1',
		dependencies: ['utils']
	},
	nav: {
		packageName: 'ng-hub-ui-nav',
		version: '^22.7.0',
		dependencies: ['utils']
	},
	paginable: {
		packageName: 'ng-hub-ui-paginable',
		version: '^22.6.0',
		dependencies: ['utils']
	},
	panels: {
		packageName: 'ng-hub-ui-panels',
		version: '^22.8.2',
		dependencies: ['ds']
	},
	portal: {
		packageName: 'ng-hub-ui-portal',
		version: '^22.0.1',
		dependencies: ['utils']
	},
	skeleton: { packageName: 'ng-hub-ui-skeleton', version: '^22.2.0' },
	sortable: {
		packageName: 'ng-hub-ui-sortable',
		version: '^22.1.0',
		externalDependencies: [{ packageName: 'sortablejs', version: '^1.15.7' }]
	},
	stepper: {
		packageName: 'ng-hub-ui-stepper',
		version: '^22.5.0',
		dependencies: ['utils']
	},
	toast: { packageName: 'ng-hub-ui-toast', version: '^22.5.1' },
	utils: { packageName: 'ng-hub-ui-utils', version: '^22.7.0' }
};
