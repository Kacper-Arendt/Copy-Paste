import { useContext } from 'react';

// HOOKS
import { ContextData } from 'src/packages/core/editor/useEditorContext';

// STYLES
import { StyledMain } from 'src/packages/core/editor/main/styles';

export const Main = () => {
	const { activeFile } = useContext(ContextData);

	return (
		<StyledMain>
			{activeFile ? (
				<pre>
					<code>{activeFile.content}</code>
				</pre>
			) : (
				<p>Chose file to show</p>
			)}
		</StyledMain>
	);
};
