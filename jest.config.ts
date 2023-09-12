export default {
  testEnvironment: 'node',
  verbose: true,
  roots: [
    './src'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    'jest-extended'
  ]
}
