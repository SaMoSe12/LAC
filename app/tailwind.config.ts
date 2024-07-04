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
      colors: {
        primary: colors.neutral[200],
        secondary: colors.neutral[700],
        text: colors.neutral[400],
        salmon: {
          '50': "#fdf3f3",
          '100': "#fce7e8",
          '200': "#f8d3f6",
          '300': "#f2afb4",
          '400': "#e7717d",
          '500': "#de5567",
          '600': "#c93550",
          '700': "#a92741",
          '800': "#8e233c",
          '900': "#792239",
        },
        babyBlue: {
          '50': "#f1f7fd",
          '100': "#e0eef9",
          '200': "#c8e2f5",
          '300': "#a2cfee",
          '400': "#85bde7",
          '500': "#5698bd",
          '600': "#4180cf",
          '700': "#386bbd",
          '800': "#335899",
          '900': "#2d4b7b",
        },

        ...DefaultTheme.colors
      }
    },
    fontFamily: {
      sans: ["Poppins", ...DefaultTheme.fontFamily.sans],
      title: ["PlaywriteCO", "Poppins", ...DefaultTheme.fontFamily.sans],
      important: ["GreatVibes"]
    }
  },
  plugins: [],
} satisfies Config