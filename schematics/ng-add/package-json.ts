import { SchematicsException, type Tree } from '@angular-devkit/schematics';
import type { PackageJson } from './models';

/**
 * Reads the consumer package manifest from the schematic tree.
 *
 * @param tree Schematic file tree.
 * @returns Parsed package manifest.
 */
export function readPackageJson(tree: Tree): PackageJson {
	const buffer = tree.read('/package.json');

	if (!buffer) {
		throw new SchematicsException('Could not find a package.json file at the workspace root.');
	}

	return JSON.parse(buffer.toString('utf-8')) as PackageJson;
}

/**
 * Writes the consumer package manifest with stable formatting.
 *
 * @param tree Schematic file tree.
 * @param packageJson Package manifest to persist.
 */
export function writePackageJson(tree: Tree, packageJson: PackageJson): void {
	tree.overwrite('/package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
}
