import { Link } from 'react-router-dom';

// STYLES
import { StyledButton } from 'src/components/core/button/styles';
import { ButtonInterface } from 'src/components/core/button/types';

export const Button = ({
	children,
	onClick,
	to,
	href,
	disabled,
	width,
	type = 'button',
	size = 'md',
	variant = 'contained',
	color = 'primary',
}: ButtonInterface) => {
	const basicProps = { size, variant, color, width };

	if (href)
		return (
			<StyledButton as="a" {...basicProps} href={href}>
				{children}
			</StyledButton>
		);

	if (to)
		return (
			<StyledButton as={Link} {...basicProps} to={to}>
				{children}
			</StyledButton>
		);

	return (
		<StyledButton {...basicProps} type={type} onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
};
