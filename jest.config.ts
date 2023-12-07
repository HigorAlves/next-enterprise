import type { Config } from 'jest'
import { defaults } from 'jest-config'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/', 'cypress', '.next'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  collectCoverage: true,
  coverageDirectory: './reports/jest/coverage',
  coverageReporters: ['lcov'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '~/*': '<rootDir>src/$1',
  },
}

export default createJestConfig(config)
