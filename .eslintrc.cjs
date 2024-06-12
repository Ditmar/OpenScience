module.exports = {
  root: true,
  extends: [require.resolve('./style-guide/astro')],
  rules:{
    "turbo/no-undeclared-env-vars":"off"
  }
};
