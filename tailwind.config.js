/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      textColor: ['child'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

