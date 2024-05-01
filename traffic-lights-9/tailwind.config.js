/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'custom': '10%',
      },
    },
    plugins: [
      require('daisyui'),
    ],
  },
};

