/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
	preset: "jest-expo",
	testEnvironment: "node",
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
	modulePaths: ["<rootDir>"],
};
