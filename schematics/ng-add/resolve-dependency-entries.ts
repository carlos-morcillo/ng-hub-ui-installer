import { LIBRARY_PACKAGES } from './library-packages';
import type { PackageDependency } from './models';

/**
 * Expands selected libraries to include required ng-hub-ui and external runtime packages.
 *
 * @param selectedLibraries Library identifiers selected by the consumer.
 * @returns Runtime dependency entries.
 */
export function resolveDependencyEntries(selectedLibraries: string[]): PackageDependency[] {
	const entries = new Map<string, string>();
	const pendingLibraries = [...selectedLibraries];

	for (const library of pendingLibraries) {
		const metadata = LIBRARY_PACKAGES[library];
		entries.set(metadata.packageName, metadata.version);

		for (const dependency of metadata.dependencies || []) {
			if (!pendingLibraries.includes(dependency)) {
				pendingLibraries.push(dependency);
			}
		}

		for (const dependency of metadata.externalDependencies || []) {
			entries.set(dependency.packageName, dependency.version);
		}
	}

	return [...entries].map(([packageName, version]) => ({ packageName, version }));
}
