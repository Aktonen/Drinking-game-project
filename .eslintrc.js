module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        singleQuote: true
      }
    ]
  },
};
