import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
	grid-area: header;

	display: flex;
	align-items: center;

	background-color: #191919;
	border-top-right-radius: ${({ theme }) => theme.radius[2]};
`;

export const StyledFileButton = styled.button<{ active: boolean }>`
	display: flex;
	align-items: center;
	column-gap: 0.2rem;

	color: ${({ theme }) => theme.transparentize({ amount: 0.2, color: theme.white })};
	font-size: 0.9rem;
	background-color: transparent;
	height: 100%;
	padding: 0 1rem;

	${({ active }) =>
		active &&
		css`
			color: ${({ theme }) => theme.white};
			background-color: ${({ theme }) => theme.transparentize({ amount: 0.9, color: theme.white })};
		`};
`;
