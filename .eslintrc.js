module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-param-reassign': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'max-nested-callbacks': ['warn', 5],
    'no-undef': 0,
  },
};
