import { ThemeProvider } from 'styled-components';

// CONFIG
import GlobalStyles from 'src/utils/theme/globalStyles';
import theme from 'src/utils/theme/themeDefault';

// PACKAGES
import { Button } from 'src/packages/core/button';

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div>
			<Button variant="text" color="info" disabled>
				Pizza Button
			</Button>
			<Button variant="outlined" color="secondary">
				Pizza Button
			</Button>
			<Button variant="contained" color="dark">
				Pizza Button
			</Button>
			{/* <Button to="main">Pizza Link</Button> */}
			<Button disabled size="sm" href="https://react-bootstrap.github.io/components/buttons/">
				Pizza A href
			</Button>
		</div>
	</ThemeProvider>
);
