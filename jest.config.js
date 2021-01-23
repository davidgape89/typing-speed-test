const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                "preprocess": true
            }
        ],
        "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["js", "svelte", "ts"],
    testPathIgnorePatterns: ["node_modules"],
    bail: false,
    verbose: true,
    transformIgnorePatterns: ["node_modules"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};