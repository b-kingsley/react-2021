module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/styleMock.ts",
    },
};
