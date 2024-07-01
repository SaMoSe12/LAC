import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
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

        transparent: colors.transparent,
        current: colors.current,
        inherit: colors.inherit,

        black: colors.black,
        white: colors.white,

        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,

        slate: colors.slate,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        orange: colors.orange,
        lime: colors.lime,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        rose: colors.rose,

      }
    },
  },
  plugins: [],
} satisfies Config