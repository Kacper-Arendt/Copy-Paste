import { useContext } from 'react';

// HOOKS
import { ContextData } from 'src/packages/core/editor/useEditorContext';

// STYLES
import { StyledAside, StyledFiles } from 'src/packages/core/editor/aside/styles';

export const Aside = () => {
	const { componentDir, componentTitle, componentName, getCurrentFile } = useContext(ContextData);

	return (
		<StyledAside>
			<p>{componentTitle}</p>

			<StyledFiles>
				<p>{componentName}</p>

				{componentDir?.map(({ name, url }) => (
					<button key={name} type="button" onClick={() => getCurrentFile(url)}>
						{name}
					</button>
				))}
			</StyledFiles>
		</StyledAside>
	);
};
