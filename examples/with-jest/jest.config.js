module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/src/**/*.spec.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
}
