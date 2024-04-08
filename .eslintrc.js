module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "react/prop-types": "off",
    "prettier/prettier": "off",
  },
};
