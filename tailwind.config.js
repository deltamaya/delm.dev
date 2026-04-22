/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                IBMPlexMono: ['IBM Plex Mono', 'monospace'],
                Inter: ['Inter', 'system-ui'],
            },
            animation: {
                wave: 'wave 2s ease-in-out infinite',
                blink: 'blink 0.8s ease-in-out infinite',
            },
            keyframes: {
                blink: {
                    '50%': { opacity: '0' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
        },
    },
    plugins: [],
}
