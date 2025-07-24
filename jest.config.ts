// require('ts-jest');
import { createDefaultPreset } from 'ts-jest';
const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src'], // @see https://stackoverflow.com/a/51174924/1614677
  preset: 'ts-jest',
  resetMocks: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: { '.(ts|tsx)': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;