import styled, { css } from "styled-components";

export const StyledFileButton = styled.button<
  { active: boolean; variant?: "header" | "aside" }
>`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.2rem;

	color: ${({ theme }) =>
  theme.transparentize({ amount: 0.2, color: theme.white })};
	font-size: 0.9rem;
	background-color: transparent;
	padding: 0 1rem;

	${({ variant }) =>
  variant === "aside" &&
  css`
			width: 100%;
			padding: 0.25rem 0;
		`};

	${({ variant }) =>
  variant === "header" &&
  css`
			height: 100%;
		`};

	${({ active }) =>
  active &&
  css`
			color: ${({ theme }) => theme.white};
			background-color: ${({ theme }) =>
    theme.transparentize({ amount: 0.9, color: theme.white })};
		`};
`;
