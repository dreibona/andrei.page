module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
