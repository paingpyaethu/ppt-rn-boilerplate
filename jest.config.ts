import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^react-native-mmkv$': '<rootDir>/src/tests/__mocks__/libs/react-native-mmkv.ts',
    '^react-native-nitro-modules$': '<rootDir>/src/tests/__mocks__/libs/react-native-nitro-modules.ts',
  },
  testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|react-native-safe-area-context|react-native-screens|react-native-keyboard-controller|react-native-svg|react-native-worklets|@react-navigation)/)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/tests/**/*',
  ],
  clearMocks: true,
  resetMocks: true,
};

export default config;
