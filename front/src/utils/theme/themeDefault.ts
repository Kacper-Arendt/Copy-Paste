import { darken, lighten, transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';

interface Polished {
	amount?: number;
	color?: string;
}

const colors = {
	mainSection: '#F6F7F9',
	asideSection: '#fff',
	headerSection: '#fff',

	base1: '#3563E9',
	base2: '#e37240',
	base3: '#e340c8',
	accent1: '#4840e3',
	accent2: '#40e34e',
	accent3: '#e39c40',
	danger: '#ed0000',

	transparent: 'transparent',
	white: '#fff',
	grey100: 'hsl(0, 0%, 96%)',
	grey200: 'hsl(0, 0%, 90%)',
	grey300: 'hsl(0, 0%, 80%)',
	grey400: 'hsl(0, 0%, 70%)',
	grey500: 'hsl(0, 0%, 60%)',
	grey600: 'hsl(0, 0%, 50%)',
	grey700: 'hsl(0, 0%, 40%)',
	grey800: 'hsl(0, 0%, 30%)',
	grey900: 'hsl(0, 0%, 20%)',
	grey1000: 'hsl(0, 0%, 10%)',
	black: 'hsl(0, 0%, 0%)',

	// CORE COLORS
	primary: '#2DBC94',
	secondary: '#C3A55C',
	success: '#218003',
	error: '#e00000',
	warning: '#f3bb1c',
	default: '#bbbbbb',
	info: '#4083ae',
	dark: '#464646',
	disabled: '#888b8d',
};

const ThemeDefault: DefaultTheme = () => {
	const theme = {
		...colors,

		font: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		fontFeatured: '"Roboto", sans-serif',

		fontWeight: {
			light: 300,
			regular: 400,
			semiBold: 500,
			bold: 700,
		},

		radius: {
			1: '0.25rem', // 4px
			2: '0.5rem', // 8px
			3: '1rem', // 16px
			4: '1.25rem', // 20px
		},

		breakpoints: {
			xs: '0',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},

		transparentize: ({ amount = 0.7, color }: Polished) => transparentize(amount ?? 0.7, color ?? theme.base1),
		lighten: ({ amount = 0.7, color }: Polished) => lighten(amount ?? 0.7, color ?? theme.base1),
		darken: ({ amount, color }: Polished) => darken(amount ?? 0.2, color ?? theme.base1),
		shadow: ({ color }: { color?: string }) => `
			box-shadow: 0px 4px 16px ${theme.transparentize({ color, amount: 0.75 })};
			-webkit-box-shadow: 0px 4px 16px ${theme.transparentize({ color, amount: 0.75 })};
		`,
	};
	return theme;
};

export type ThemeType = typeof ThemeDefault;
export type ColorsKeys = keyof typeof colors;

export default ThemeDefault;
