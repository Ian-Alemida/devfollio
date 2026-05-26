const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'next/font/google': '<rootDir>/src/tests/__mocks__/nextFontMock.js',
  },
  testMatch: ['<rootDir>/src/tests/**/*.test.{js,jsx}'],
})
