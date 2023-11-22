import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container:{
      center: true,
      screens:{
        sm:"680px",
        md:"728px",
        lg:"984px",
        xl:"1240px",
      },
    },
    borderColor: {
      DEFAULT: "black",
    },
  },
  plugins: [],
}
export default config;
