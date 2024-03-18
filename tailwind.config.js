/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#7f1d1d',
      secondary: '#e7e5e4'
    },
  },
  plugins: [],
  corePlugins: {
    ...require('tailwind-rn/unsupported-core-plugins'),
    gap: true,
  },
};
