import { type Rule, type SchematicContext, type Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import type { NgAddSchema } from './models';
import { normalizeLibraries } from './normalize-libraries';
import { readPackageJson, writePackageJson } from './package-json';
import { resolveDependencyEntries } from './resolve-dependency-entries';

/**
 * Entry point used by Angular CLI when consumers run `ng add ng-hub-ui`.
 *
 * @param options Installer options resolved by Angular CLI prompts or flags.
 * @returns A rule that updates package.json and optionally installs packages.
 */
export function ngAdd(options: NgAddSchema): Rule {
	return (tree: Tree, context: SchematicContext) => {
		const selectedLibraries = normalizeLibraries(options.libraries);
		const dependencyEntries = resolveDependencyEntries(selectedLibraries);
		const packageJson = readPackageJson(tree);

		packageJson.dependencies = packageJson.dependencies || {};

		for (const { packageName, version } of dependencyEntries) {
			if (!packageJson.dependencies[packageName]) {
				packageJson.dependencies[packageName] = version;
			}
		}

		writePackageJson(tree, packageJson);

		if (!options.skipInstall) {
			context.addTask(new NodePackageInstallTask());
		}

		context.logger.info(`Installed ng-hub-ui libraries: ${selectedLibraries.join(', ')}`);
	};
}
