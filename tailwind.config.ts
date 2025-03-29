import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            borderRadius: {
                '32': '32px'
            },
            boxShadow: {
                custom: '0px 0px 12px 0px #00000026',
                'custom-dark': '0px 0px 12px 0px #00000040'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                border: {
                    light: '#3A414C1F',
                    dark: '#D9D9D933'
                },
                default: {
                    light: '#121315',
                    dark: '#FFFFFF'
                },
                primary: {
                    dark: '#D9D9D9',
                    light: '#3A414CE5'
                },
                base: {
                    light: '#684DF4',
                    dark: '#080F1C',
                    'light-hover': '#2858E8',
                    'dark-hover': '#2878E8'
                },
                brand: {
                    base: '#4169E1',
                    black: '#121315'
                },
                red: {
                    DEFAULT: '#CE3F3F',
                    100: '#F93C65'
                },
                green: {
                    DEFAULT: '#27AE60'
                }
            },
            animation: {
                bounce: 'bounce 0.6s infinite'
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(0.5)', opacity: '0.5' }
                }
            }
        }
    },
    plugins: []
};
export default config;
