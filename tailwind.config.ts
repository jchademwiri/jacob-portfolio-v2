import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#001514',
        accent: '#47EA7A',
        armyGreen: '#364538',
      },
    },
  },
  plugins: [],
}
export default config
