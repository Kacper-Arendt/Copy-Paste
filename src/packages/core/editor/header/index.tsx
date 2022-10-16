import { useContext } from 'react';

// HOOKS
import { ContextData } from 'src/packages/core/editor/useEditorContext';

// STYLES
import { StyledHeader } from 'src/packages/core/editor/header/styles';
import { FileButton } from './FileButton';

export const Header = () => {
	const { componentDir, getCurrentFile, activeFile } = useContext(ContextData);

	return (
		<StyledHeader>
			{componentDir?.map(({ name, url }) => (
				<FileButton key={name} text={name} onClick={() => getCurrentFile(url)} active={activeFile?.name === name} />
			))}
		</StyledHeader>
	);
};
