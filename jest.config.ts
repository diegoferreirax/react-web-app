import type { Config } from 'jest';

const config: Config = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleNameMapper: {
        '^modules/(.*)$': '<rootDir>/src/modules/$1',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/file-mock.js'
    },
    coverageThreshold: {
        global: {
            statements: 95,
            branches: 90,
            lines: 95,
            functions: 90,
        },
    },
    coverageReporters: ['text-summary'],
};

export default config;