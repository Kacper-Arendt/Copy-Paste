// STYLES
import { StyledFileButton } from 'src/packages/core/editor/common/styles';

// ASSETS
import File from 'src/packages/core/editor/assets/file.svg';

export interface FileButtonInterface {
	text: string;
	onClick: () => void;
	active: boolean;
	variant?: 'header' | 'aside';
}

export const FileButton = ({ text, onClick, active, variant = 'aside' }: FileButtonInterface) => (
	<StyledFileButton type="button" onClick={onClick} active={active} variant={variant}>
		<img src={File} alt="file" />
		{text}
	</StyledFileButton>
);
