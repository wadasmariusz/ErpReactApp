module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    // 'plugin:prettier/recommended'
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": ["ignore"],
  },
};
