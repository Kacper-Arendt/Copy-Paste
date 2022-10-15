import { ReactNode } from 'react';

export interface ButtonInterface extends ButtonStylesInterface {
	children: ReactNode;

	// BUTTON
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;

	// LINKS
	to?: string;
	href?: string;
}

export interface ButtonStylesInterface {
	size?: ButtonSizeType;
	variant?: 'text' | 'contained' | 'outlined';
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'default' | 'dark' | 'info';
	width?: string;
}

type ButtonSizeType = keyof typeof buttonSize;

export const buttonSize = {
	sm: '0.6rem',
	md: '0.8rem 1.5rem',
	lg: '1rem 2rem',
};
