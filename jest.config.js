module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: false,
            useESM: true,
            babelConfig: true,
            plugins: ["babel-plugin-transform-vite-meta-env"],
        },
    },
    transform: {
        "^.+\\.(js|jsx|ts)$": "babel-jest",
    }
}