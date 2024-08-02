/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your template files
  ],
  theme: {
    screens: {
      'sm':  [
        {'min': '350px', 'max': '620px'},
      ],
      'md': [
  
        {'min': '620px', 'max': '1024px'},

      ],
      'lg': '1024px',
      'xl': '1400px',
    }
  },
  plugins: [],
}

