import { ThemeProvider } from 'styled-components';

// CONFIG
import GlobalStyles from 'src/utils/theme/globalStyles';
import theme from 'src/utils/theme/themeDefault';

// PACKAGES
import { Map } from './packages/core/map';

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div>
			<div style={{ height: '50vh', width: '50vh' }}>
				<Map />
			</div>
		</div>
	</ThemeProvider>
);
