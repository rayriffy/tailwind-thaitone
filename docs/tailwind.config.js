import defaultConfig from 'tailwindcss/defaultConfig'

import daisyui from 'daisyui'
import thaitone from '../src'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Noto Sans Thai Looped'",
          ...defaultConfig.theme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [thaitone(), daisyui],
}
