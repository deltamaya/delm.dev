import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        // ibmPlexSansSC: ['IBM Plex Sans SC', 'sans-serif'],
        inter:['Inter','sans-serif'],
        jetbrains:[ 'JetBrains Mono', 'monospace'],
      },
    }
  },

  plugins: [typography, forms]
} satisfies Config;
