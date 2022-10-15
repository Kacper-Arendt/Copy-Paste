import { Link } from 'react-router-dom';

// STYLES
import { StyledButton } from 'src/packages/core/button/Styles';
import { ButtonInterface } from 'src/packages/core/button/types';

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
			<StyledButton as="a" href={href} {...basicProps}>
				{children}
			</StyledButton>
		);

	if (to)
		return (
			<StyledButton as={Link} to={to} {...basicProps}>
				{children}
			</StyledButton>
		);

	return (
		<StyledButton type={type} onClick={onClick} color={color} variant={variant} size={size} width={width} disabled={disabled}>
			{children}
		</StyledButton>
	);
};
