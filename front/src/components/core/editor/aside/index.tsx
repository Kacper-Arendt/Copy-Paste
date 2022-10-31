import { useContext } from 'react';

// HOOKS
import { ContextData } from 'src/components/core/editor/useEditorContext';

// STYLES
import { StyledAside, StyledFiles, StyledHeader } from 'src/components/core/editor/aside/styles';
import { FileButton } from '../common/FileButton';

export const Aside = () => {
	const { componentDir, componentTitle, componentName, getCurrentFile, activeFile } = useContext(ContextData);

	return (
		<StyledAside>
			<StyledHeader>{componentTitle}</StyledHeader>

			<StyledFiles>
				<p>{componentName}</p>

				{componentDir?.map(({ name, url }) => (
					<FileButton
						key={name}
						variant="aside"
						text={name}
						onClick={() => getCurrentFile(url)}
						active={activeFile?.name === name}
					/>
				))}
			</StyledFiles>
		</StyledAside>
	);
};
