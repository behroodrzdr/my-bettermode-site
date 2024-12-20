import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "surface": "#23252d",
      "surface-subdued": "rgb(53, 55, 62)",
      "content-subdued": "rgb(221, 228, 246)",
      'content-on-background-pressed': 'var(--bm-color-content-on-background-pressed)',
      'background-pressed': 'var(--bm-color-background-pressed)',
      'content-on-background-subdued': 'var(--bm-color-content-on-background-subdued)',
      'content-on-background': 'var(--bm-color-content-on-background)',
      'background-hovered': 'var(--bm-color-background-hovered)',
      'background-disabled': 'var(--bm-color-surface-disabled)',
      'surface-neutral': 'var(--bm-color-surface-neutral)',
      'content-on-background-hovered': 'var(--bm-color-content-on-background-hovered)',
    },
    fontSize: {

    },
    extend: {},
    borderRadius: {
      'base': 'var(--bm-radius-base)',
      'lg': 'var(--bm-radius-lg)',
    },
    borderColor: {
      'card': 'var(--bm-border-color-card)',
    },
    boxShadow: {
      'card': 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)'
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-label-md': {
          fontSize: 'var(--bm-font-size-md)',
          lineHeight: 'var(--bm-font-line-height-md)',
        },
        '.text-heading-xs': {
          fontSize: 'var(--bm-font-size-h-xs)',
          lineHeight: 'var(--bm-font-line-height-h-xs)',
        },
        '.text-heading-2xs': {
          fontSize: 'var(--bm-font-size-h-2xs)',
          lineHeight: 'var(--bm-font-line-height-h-2xs)',
        },
        '.text-heading-xl': {
          fontSize: 'var(--bm-font-size-h-xl)',
          lineHeight: 'var(--bm-font-line-height-h-xl)',
        },
        '.text-heading-md': {
          fontSize: 'var(--bm-font-size-h-md)',
          lineHeight: 'var(--bm-font-line-height-h-md)',
        },
      });
    }),
  ],
};

export default config;
