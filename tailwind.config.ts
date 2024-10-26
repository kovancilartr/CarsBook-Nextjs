import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px",
		},
	},
  	extend: {
  		colors: {
  			myprimary: "#ff3600",
			mysecondary: "#424242",
			myLight: {
				100: "#fff8f6",
				"bg": "#ffffff",
			},
			myDark: {
				100: "#303030",
				200: "#fff8f6",
				"bg": "#000000",
			},
  		},
		backgroundImage: {
			"footer-bg": "url('/footer-bg.png')",
			"service-bg": "url('/service-bg.png')",
			"section-bg": "url('/section-bg.jpg')",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			'4xl': '3rem',
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
