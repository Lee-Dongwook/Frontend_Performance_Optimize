module.exports = function override(config) {
    config.resolve.fallback = {
        "path" : require.resolve('path-browserify'),
        "os": require.resolve('os-browserify'),
        "crypto": require.resolve('crypto-browserify'),
        "stream": require.resolve('stream-browserify'),
        "buffer": require.resolve('buffer')
    };
    return config;
}