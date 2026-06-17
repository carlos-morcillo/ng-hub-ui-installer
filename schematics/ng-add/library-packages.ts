import type { PackageMetadata } from './models';

/**
 * Central package catalogue used by prompts, validation, and dependency resolution.
 */
export const LIBRARY_PACKAGES: Record<string, PackageMetadata> = {
	accordion: { packageName: 'ng-hub-ui-accordion', version: '^21.1.1' },
	'action-sheet': { packageName: 'ng-hub-ui-action-sheet', version: '^0.0.1' },
	avatar: { packageName: 'ng-hub-ui-avatar', version: '^21.1.0' },
	board: { packageName: 'ng-hub-ui-board', version: '^21.1.1' },
	breadcrumbs: { packageName: 'ng-hub-ui-breadcrumbs', version: '^21.1.0' },
	calendar: {
		packageName: 'ng-hub-ui-calendar',
		version: '^21.1.1',
		dependencies: ['utils']
	},
	dropdown: { packageName: 'ng-hub-ui-dropdown', version: '^0.0.1' },
	history: { packageName: 'ng-hub-ui-history', version: '^0.1.0' },
	modal: { packageName: 'ng-hub-ui-modal', version: '^21.0.2' },
	nav: { packageName: 'ng-hub-ui-nav', version: '^21.1.1' },
	paginable: { packageName: 'ng-hub-ui-paginable', version: '^21.3.0' },
	portal: { packageName: 'ng-hub-ui-portal', version: '^0.3.3' },
	skeleton: { packageName: 'ng-hub-ui-skeleton', version: '^0.1.0' },
	sortable: {
		packageName: 'ng-hub-ui-sortable',
		version: '^21.3.0',
		externalDependencies: [{ packageName: 'sortablejs', version: '^1.15.7' }]
	},
	stepper: { packageName: 'ng-hub-ui-stepper', version: '^21.2.0' },
	utils: { packageName: 'ng-hub-ui-utils', version: '^1.2.1' }
};
