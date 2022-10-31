import styled from 'styled-components';

export const StyledAside = styled.div`
	grid-area: aside;

	background: rgba(51, 51, 51, 0.8);
	backdrop-filter: blur(1.5rem);

	border-bottom-left-radius: ${({ theme }) => theme.radius[2]};
	border-top-left-radius: ${({ theme }) => theme.radius[2]};
`;

export const StyledFiles = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	padding: 1rem 0;
`;

export const StyledHeader = styled.p`
	font-size: 1rem;
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.transparentize({ amount: 0.8, color: theme.white })};
`;
