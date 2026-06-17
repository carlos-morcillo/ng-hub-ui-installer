import { SchematicsException } from '@angular-devkit/schematics';
import { LIBRARY_PACKAGES } from './library-packages';

/**
 * Accepts prompt output and CLI flags while keeping validation at the schematic boundary.
 *
 * @param libraries Raw library selection.
 * @returns Unique library identifiers in selection order.
 */
export function normalizeLibraries(libraries: string[] | string | undefined): string[] {
	const selectedLibraries = Array.isArray(libraries)
		? libraries
		: `${libraries || ''}`
				.split(',')
				.map((library) => library.trim())
				.filter(Boolean);

	const uniqueLibraries = [...new Set(selectedLibraries)];

	if (!uniqueLibraries.length) {
		throw new SchematicsException('Select at least one ng-hub-ui library to install.');
	}

	for (const library of uniqueLibraries) {
		if (!LIBRARY_PACKAGES[library]) {
			throw new SchematicsException(`Unknown ng-hub-ui library: ${library}.`);
		}
	}

	return uniqueLibraries;
}

