import styled from "styled-components";

export const StyledMain = styled.div`
	grid-area: main;

	padding: 1rem;
	background-color: #222222;
	overflow: auto;
	border-bottom-right-radius: ${({ theme }) => theme.radius[2]};
`;
