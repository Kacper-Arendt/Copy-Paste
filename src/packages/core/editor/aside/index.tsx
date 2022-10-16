// STYLES
import { StyledAside } from 'src/packages/core/editor/aside/styles';

export const Aside = () => {
	console.log();
	return (
		<StyledAside>
			<p>Name</p>
			<div>
				<p>Main dir name</p>
				<div>
					<p>types.ts</p>
					<p>styles.ts</p>
					<p>index.ts</p>
				</div>
			</div>
		</StyledAside>
	);
};
