module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "react/prop-types": "off",
    "prettier/prettier": "off",
  },
};
