module.exports = {
  // preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  transformIgnorePatterns: [
    "node_modules/(?!nano-grid|mr-kernel)"
  ],
}
