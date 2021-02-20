module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    collectCoverageFrom: [
        "src/pages/**/*.tsx",
        "src/components/**/*.tsx"
    ]
};