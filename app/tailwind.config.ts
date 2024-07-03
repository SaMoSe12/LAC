import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import DefaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue, js, jsx, tsx, ts, html}',
  ],
  theme: {
    extend: {
      color: {
        primary: colors.neutral[200],
        secondary: colors.neutral[700],
        text: colors.neutral[400],

        ...DefaultTheme.colors
      }
    },
    fontFamily: {
      sans: ["poppins", ...DefaultTheme.fontFamily.sans],
      title: ["Playwrite_CO"],
      important: ["Great_VibesE"]
    }
  },
  plugins: [],
} satisfies Config