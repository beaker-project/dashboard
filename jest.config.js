module.exports = {
  roots: ['<rootDir>/__tests__/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/*.test.ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__mocks__/fileMock.js',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@config': '<rootDir>/src/app.config.ts',
    '@ducks/(.*)': '<rootDir>/src/store/ducks/$1',
    '@mocks/(.*)': '<rootDir>/__mocks__/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@store': '<rootDir>/src/store/index.ts',
    '@tests/(.*)': '<rootDir>/__tests__/$1',
  },
};
