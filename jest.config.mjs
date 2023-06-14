import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/', 'cypress'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  collectCoverage: true,
  coverageDirectory: './reports/jest/coverage',
  coverageReporters: ['lcov'],
  testRegex: '(/__tests__/.*|(\\\\.|/)(test))\\\\.[jt]sx?$',
  moduleNameMapper: {
    '~/*': '<rootDir>src/$1',
  },
}

export default createJestConfig(config)
