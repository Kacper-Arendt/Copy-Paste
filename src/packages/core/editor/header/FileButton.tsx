// STYLES
import { StyledFileButton } from 'src/packages/core/editor/header/styles';

import File from 'src/packages/core/editor/assets/file.svg';

export interface FileButtonInterface {
	text: string;
	onClick: () => void;
	active: boolean;
}

export const FileButton = ({ text, onClick, active }: FileButtonInterface) => (
	<StyledFileButton type="button" onClick={onClick} active={active}>
		<img src={File} alt="file" />
		{text}
	</StyledFileButton>
);
