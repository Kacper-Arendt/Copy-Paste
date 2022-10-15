import styled, { css } from 'styled-components';

// MODELS
import { buttonSize, ButtonStylesInterface } from 'src/packages/core/button/types';

const TextButton = css<ButtonStylesInterface>`
	${({ theme, color }) =>
		color &&
		theme[color] &&
		css`
			color: ${theme[color]};

			&:hover {
				border-color: ${theme.lighten({ amount: 0.35, color: theme[color] })};
				color: ${theme.darken({ amount: 0.15, color: theme[color] })};
			}

			&:active {
				border-color: ${theme.lighten({ amount: 0.3, color: theme[color] })};
			}
		`}
`;

const OutlinedButton = css<ButtonStylesInterface>`
	${({ theme, color }) =>
		color &&
		theme[color] &&
		css`
			border: 1px solid ${theme[color]};
			color: ${theme[color]};

			&:hover {
				border-color: ${theme.darken({ amount: 0.05, color: theme[color] })};
				background-color: ${theme.lighten({ amount: 0.4, color: theme[color] })};
				color: ${theme.darken({ amount: 0.15, color: theme[color] })};
			}

			&:active {
				border-color: ${theme.darken({ amount: 0.1, color: theme[color] })};
				background-color: ${theme.lighten({ amount: 0.35, color: theme[color] })};
			}
		`}
`;

const ContainedButton = css<ButtonStylesInterface>`
	${({ theme, color }) =>
		color &&
		theme[color] &&
		css`
			background-color: ${theme[color]};
			color: ${theme.white};

			&:hover {
				background-color: ${theme.darken({ amount: 0.05, color: theme[color] })};
				border-color: ${theme.darken({ amount: 0.05, color: theme[color] })};
			}

			&:active {
				background-color: ${theme.darken({ amount: 0.1, color: theme[color] })};
				border-color: ${theme.darken({ amount: 0.1, color: theme[color] })};
			}
		`}
`;

export const StyledButton = styled.button<ButtonStylesInterface>`
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	background-color: transparent;
	border: 1px solid transparent;
	font-size: 1rem;
	border-radius: ${({ theme }) => theme.radius[1]};
	color: ${({ theme }) => theme.white};
	letter-spacing: 1.05px;

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};

	${({ size }) =>
		size &&
		buttonSize[size] &&
		css`
			padding: ${buttonSize[size]};
		`};

	${({ variant }) => {
		switch (variant) {
			case 'text':
				return css`
					${TextButton}
				`;
			case 'outlined':
				return css`
					${OutlinedButton};
				`;
			case 'contained':
			default:
				return css`
					${ContainedButton};
				`;
		}
	}}

	:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.disabled};
		color: ${({ theme }) => theme.white};
		border: 1px solid ${({ theme }) => theme.disabled};
	}
`;
