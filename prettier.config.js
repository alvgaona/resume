// prettier.config.js
const config = {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
