import plugin from 'tailwindcss/plugin'

import { colors } from './colors'

export default plugin(() => {}, {
  theme: {
    extend: {
      colors,
    },
  },
})

export { colors }
