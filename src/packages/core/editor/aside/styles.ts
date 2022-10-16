import styled from 'styled-components';

export const StyledAside = styled.div`
	grid-area: aside;

	padding: 1rem;

	background: rgba(51, 51, 51, 0.8);
	backdrop-filter: blur(1.5rem);

	border-bottom-left-radius: ${({ theme }) => theme.radius[2]};
	border-top-left-radius: ${({ theme }) => theme.radius[2]};
`;
