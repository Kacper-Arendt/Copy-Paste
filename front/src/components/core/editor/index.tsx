// MODELS
import { EditorPropsInterface } from 'src/components/core/editor/types';

// HOOKS
import { ContextProvider } from 'src/components/core/editor/useEditorContext';

// STYLES
import { StyledEditor } from 'src/components/core/editor/styles';

// COMPONENTS
import { Aside } from 'src/components/core/editor/aside';
import { Header } from 'src/components/core/editor/header';
import { Main } from 'src/components/core/editor/main';

export const Editor = ({ componentName, componentTitle }: EditorPropsInterface) => (
	<ContextProvider value={{ componentName, componentTitle }}>
		<StyledEditor>
			<Aside />
			<Header />
			<Main />
		</StyledEditor>
	</ContextProvider>
);
