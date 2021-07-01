import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';

const StyledHeader = styled(Box)`
	background-color: ${theme('colors.modHeaderBackground', '#000000')};
	min-height: 84px;
	max-height: 148px;
	padding: 24px 28px;

	&.editor {
		min-height: 42px;
		max-height: 74px;
		padding: 12px 14px;
	}
`;

const StyledText = styled(Text)`
	color: ${theme('colors.modHeaderText', '#FFFFFF')};
	font-size: ${theme('fontSizes.xxxl')};
	padding-right: 28px;

	&.editor {
		font-size: ${theme('fontSizes.md')};
		padding-right: 14px;
	}
`;

const Logo = styled.img`
	width: auto;
	min-height: 36px;
	max-height: 100px;
	max-width: 300px;

	&.editor {
		max-height: 50px;
		min-height: 18px;
		max-width: 150px;
	}
`;

const Header = forwardRef((props, ref) => {
	const { type, logoUrl, logoHeight, text, ...omittedProps } = props;
	return (
		<StyledHeader
			ref={ref}
			className={type}
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			{...omittedProps}
		>
			<StyledText className={type} fontWeight="500" limitLinesOfTextTo={1}>
				{text}
			</StyledText>
			{logoUrl && (
				<Logo
					className={type}
					data-cy="Logo"
					alt="Customer logo"
					src={logoUrl}
					height={logoHeight}
				/>
			)}
		</StyledHeader>
	);
});

Header.displayName = 'Header';

Header.defaultProps = {
	'data-cy': 'Header',
	type: 'display',
	text: 'Enter Text !!!',
};

export default Header;

Header.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	text: PropTypes.string.isRequired,
	logoUrl: PropTypes.string,
	logoHeight: PropTypes.number,
	type: PropTypes.oneOf(['editor', 'display']),
};
