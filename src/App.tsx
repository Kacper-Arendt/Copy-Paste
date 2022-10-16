import { ThemeProvider } from 'styled-components';

// CONFIG
import GlobalStyles from 'src/utils/theme/globalStyles';
import theme from 'src/utils/theme/themeDefault';

// PACKAGES
import { Button } from 'src/packages/core/button';
import { Editor } from 'src/packages/core/editor';

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div>
			<Button variant="text" color="info">
				Pizza Button
			</Button>
			<Editor componentName="button" componentTitle="Button" />
		</div>
	</ThemeProvider>
);
