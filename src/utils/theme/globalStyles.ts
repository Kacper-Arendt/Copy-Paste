import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${css`
		*,
		*::after,
		*::before {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}
		body,
		html {
			font-family: ${({ theme }) => theme.font};
			font-weight: ${({ theme }) => theme.fontWeight.regular};
		}
		a {
			text-decoration: none;
		}
		p {
			padding: 0;
			margin: 0;
		}
		button {
			cursor: pointer;
			font-family: ${({ theme }) => theme.font};
			border: unset;
			:disabled {
				cursor: not-allowed;
			}
		}
	`}
`;
