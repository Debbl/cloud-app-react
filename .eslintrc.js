module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['react-app', 'react-app/jest', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
};
