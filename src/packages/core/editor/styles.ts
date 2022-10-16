import styled from 'styled-components';

export const StyledEditor = styled.div`
	display: grid;
	grid-template-columns: minmax(12rem, 15.5rem) minmax(25rem, 53rem);
	grid-template-rows: 2rem 1fr 1.2rem;
	grid-template-areas:
		'aside header'
		'aside main'
		'aside main';

	height: 42.4rem;
	border-radius: ${({ theme }) => theme.radius[2]};

	color: white;
`;
