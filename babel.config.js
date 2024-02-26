module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            tests: ["./tests/"],
            "@components": "./src/components",
          },
        },
      ],
      ['module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      path: '.env',
      allowUndefined: true
    }]
    ],
  };
};
