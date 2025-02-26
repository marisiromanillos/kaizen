import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#000000',
        green: '#393D35',
        lightGreen: '#D7E8CF',
      },
      screens: {
        '2xl': '1440px',
      },
      borderRadius: {
        btn: '32px',
      },
      padding: {
        15: '60px',
      },
      margin: {
        '1/12': '8.33%',
        '2/12': '16.66%',
      },
      borderWidth: {
        3: '3px',
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
      },
      minHeight: {
        'vp': 'calc(100vh - var(--vh-offset, 0px))',
        'vp-10': 'calc(10vh - var(--vh-offest, 0px))',
        'vp-20': 'calc(20vh - var(--vh-offest, 0px))',
        'vp-30': 'calc(30vh - var(--vh-offest, 0px))',
        'vp-40': 'calc(40vh - var(--vh-offest, 0px))',
        'vp-50': 'calc(50vh - var(--vh-offest, 0px))',
        'vp-60': 'calc(60vh - var(--vh-offest, 0px))',
        'vp-70': 'calc(70vh - var(--vh-offest, 0px))',
        'vp-80': 'calc(80vh - var(--vh-offest, 0px))',
        'vp-90': 'calc(90vh - var(--vh-offest, 0px))',
        'nvp': 'calc(100vh - var(--vh-offset, 0px) - var(--nav-height, 0px))',
        'nvp-10': 'calc(10vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-20': 'calc(20vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-30': 'calc(30vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-40': 'calc(40vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-50': 'calc(50vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-60': 'calc(60vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-70': 'calc(70vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-80': 'calc(80vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-90': 'calc(90vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
      },
      maxHeight: {
        'vp': 'calc(100vh - var(--vh-offset, 0px))',
        'vp-10': 'calc(10vh - var(--vh-offest, 0px))',
        'vp-20': 'calc(20vh - var(--vh-offest, 0px))',
        'vp-30': 'calc(30vh - var(--vh-offest, 0px))',
        'vp-40': 'calc(40vh - var(--vh-offest, 0px))',
        'vp-50': 'calc(50vh - var(--vh-offest, 0px))',
        'vp-60': 'calc(60vh - var(--vh-offest, 0px))',
        'vp-70': 'calc(70vh - var(--vh-offest, 0px))',
        'vp-80': 'calc(80vh - var(--vh-offest, 0px))',
        'vp-90': 'calc(90vh - var(--vh-offest, 0px))',
        'nvp': 'calc(100vh - var(--vh-offset, 0px) - var(--nav-height, 0px))',
        'nvp-10': 'calc(10vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-20': 'calc(20vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-30': 'calc(30vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-40': 'calc(40vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-50': 'calc(50vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-60': 'calc(60vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-70': 'calc(70vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-80': 'calc(80vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-90': 'calc(90vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
      },
      height: {
        'vp': 'calc(100vh - var(--vh-offset, 0px))',
        'vp-10': 'calc(10vh - var(--vh-offest, 0px))',
        'vp-20': 'calc(20vh - var(--vh-offest, 0px))',
        'vp-30': 'calc(30vh - var(--vh-offest, 0px))',
        'vp-40': 'calc(40vh - var(--vh-offest, 0px))',
        'vp-50': 'calc(50vh - var(--vh-offest, 0px))',
        'vp-60': 'calc(60vh - var(--vh-offest, 0px))',
        'vp-70': 'calc(70vh - var(--vh-offest, 0px))',
        'vp-80': 'calc(80vh - var(--vh-offest, 0px))',
        'vp-90': 'calc(90vh - var(--vh-offest, 0px))',
        'nvp': 'calc(100vh - var(--vh-offset, 0px) - var(--nav-height, 0px))',
        'nvp-10': 'calc(10vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-20': 'calc(20vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-30': 'calc(30vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-40': 'calc(40vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-50': 'calc(50vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-60': 'calc(60vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-70': 'calc(70vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-80': 'calc(80vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
        'nvp-90': 'calc(90vh - var(--vh-offest, 0px) - var(--nav-height, 0px))',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.wrapper': {
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          width: '100%',
          '@screen md': {
            maxWidth: 'calc(100% - 40px)',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@screen lg': {
            maxWidth: 'calc(100% - 60px)',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@screen 2xl': {
            maxWidth: '1325px',
            paddingLeft: '3.906rem',
            paddingRight: '3.906rem',
          }
        }
      })
    }),
  ],
} satisfies Config;