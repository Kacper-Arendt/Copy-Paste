import styled from 'styled-components';

export const StyledHeader = styled.div`
	grid-area: header;

	display: flex;
	align-items: center;

	background-color: #191919;
	border-top-right-radius: ${({ theme }) => theme.radius[2]};
`;
