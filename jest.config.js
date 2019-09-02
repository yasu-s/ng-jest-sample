module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  }
};
