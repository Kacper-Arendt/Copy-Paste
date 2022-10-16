// MODELS

// STYLES
import { StyledEditor } from 'src/packages/core/editor/styles';

// COMPONENTS
import { Aside } from 'src/packages/core/editor/aside';
import { Header } from 'src/packages/core/editor/header';
import { Main } from 'src/packages/core/editor/main';

export const Editor = () => {
	console.log();
	return (
		<StyledEditor>
			<Aside />
			<Header />
			<Main />
		</StyledEditor>
	);
};
