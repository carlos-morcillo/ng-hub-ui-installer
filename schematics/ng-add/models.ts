/**
 * Options resolved by Angular CLI prompts or non-interactive flags.
 */
export interface NgAddSchema {
	/**
	 * Libraries selected through prompts or CLI flags.
	 */
	libraries: string[] | string;

	/**
	 * Avoids scheduling package installation after package.json changes.
	 */
	skipInstall?: boolean;
}

/**
 * Describes one runtime dependency added to the consumer package manifest.
 */
export interface PackageDependency {
	/**
	 * Runtime package name.
	 */
	packageName: string;

	/**
	 * Default semver range for the package.
	 */
	version: string;
}

/**
 * Metadata used to map a short library identifier to installable packages.
 */
export interface PackageMetadata extends PackageDependency {
	/**
	 * Additional ng-hub-ui libraries needed by this package at runtime.
	 */
	dependencies?: string[];

	/**
	 * Non ng-hub-ui packages required by this library at runtime.
	 */
	externalDependencies?: PackageDependency[];
}

/**
 * Minimal consumer package manifest shape touched by this schematic.
 */
export interface PackageJson {
	/**
	 * Runtime dependencies managed by the consumer application.
	 */
	dependencies?: Record<string, string>;

	[key: string]: unknown;
}

