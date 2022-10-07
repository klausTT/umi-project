module.exports = {
  extends: require.resolve('@umijs/max/stylelint'),
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
