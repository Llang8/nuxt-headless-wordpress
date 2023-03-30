/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': {
          'default': '#243763',
          'light': '#344f8e',
          'dark': '#141f38',
        },
        'secondary': {
          'default': '#FF6E31',
          'light': '#ff8a58',
          'dark': '#ff520a',
        },
        'success': '#3CB371',
        'info': '#1E90FF',
      }
    }
  },
  variants: {},
  plugins: []
}
