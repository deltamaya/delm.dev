import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type {Config} from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                IBMPlexMono: ['IBM Plex Mono', 'monospace'],
                Inter:['Inter','system']
            },
            animation: {
                wave: "wave 2s ease-in-out infinite",
                blink:"blink 0.8s ease-in-out infinite"
            },
            keyframes: {
                blink: {
                    "50%": {opacity: "0"},
                },
                wave: {
                    "0%, 100%": {transform: "translateY(0)"},
                    "50%": {transform: "translateY(-8px)"},
                },
            },
        }
    },

    plugins: [typography, forms]
} satisfies Config;
