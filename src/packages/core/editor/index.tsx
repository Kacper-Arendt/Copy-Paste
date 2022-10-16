// MODELS
import { EditorPropsInterface } from 'src/packages/core/editor/types';

// HOOKS
import { ContextProvider } from 'src/packages/core/editor/useEditorContext';

// STYLES
import { StyledEditor } from 'src/packages/core/editor/styles';

// COMPONENTS
import { Aside } from 'src/packages/core/editor/aside';
import { Header } from 'src/packages/core/editor/header';
import { Main } from 'src/packages/core/editor/main';

export const Editor = ({ componentName, componentTitle }: EditorPropsInterface) => (
	<ContextProvider value={{ componentName, componentTitle }}>
		<StyledEditor>
			<Aside />
			<Header />
			<Main />
		</StyledEditor>
	</ContextProvider>
);
