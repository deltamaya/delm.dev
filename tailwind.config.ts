import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type {Config} from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                // ibmPlexSansSC: ['IBM Plex Sans SC', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                jetbrains: ['JetBrains Mono', 'consolas', 'monospace'],
            },
            animation: {
                wave: "wave 2s ease-in-out infinite",
            },
            keyframes: {
                wave: {
                    "0%, 100%": {transform: "translateY(0)"},
                    "50%": {transform: "translateY(-5px)"},
                },
            },
        }
    },

    plugins: [typography, forms]
} satisfies Config;
