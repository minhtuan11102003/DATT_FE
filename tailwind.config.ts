import type { Config } from 'tailwindcss';


const config: Config = {

	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'xs': '480px',
			'sm': '480px',
			// => @media (m:in-width 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '991px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1200px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
			padding: '15px',

		},
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				karla: ['var(--font-karla)', 'sans-serif'],
				PlayfairDisplay: ['var(--font-PlayfairDisplay)', 'serif'],
				Lora: ['var(--font-Lora)', 'serif'],
			},
			keyframes: {
				bounceInDown: {
					'0%': { transform: 'translate3d(0, -3000px, 0)', opacity: '0' },
					'60%': {
						transform: 'translate3d(0, 25px, 0)', opacity: '1'
					},
					'75%': {
						transform: 'translate3d(0, -10px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, 5px, 0)'
					},
					'100%': { transform: 'none' }
				},
				bounceInUp: {
					'0%': { transform: 'translate3d(0, 3000px, 0)', opacity: '0' },
					'60%': {
						transform: 'translate3d(0, -20px, 0)', opacity: '1'
					},
					'75%': {
						transform: 'translate3d(0, 10px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, -5px, 0)'
					},
					'100%': { transform: 'translate3d(0, 0, 0)' }
				}

			},
			animation: {
				bounceInDown: 'bounceInDown cubic-bezier(0.215, 0.610, 0.355, 1.000)',
				bounceInUp: 'bounceInUp cubic-bezier(0.215, 0.610, 0.355, 1.000)'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.22, 0.61, 0.36, 1)',

			},
		},
	},
	plugins: [require("tailwindcss-animate")],

};
export default config;
