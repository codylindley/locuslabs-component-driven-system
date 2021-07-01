import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import Icon from '@locus-labs/mod-icon';
import styled, { ThemeContext } from 'styled-components';
import { ifNotProp, ifProp, theme } from 'styled-tools';

const StyledWrapper = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
	max-width: 293px;
	padding: ${ifProp('isRight', '16px 10px 16px 16px', '16px 16px 16px 10px')};
	border-radius: 8px;

	&.editor {
		filter: drop-shadow(${theme('shadows.sm')});
		max-width: 147px;
		padding: ${ifProp('isRight', '8px 5px 8px 8px', '8px 8px 8px 5px')};
		border-radius: 4px;
	}
`;

const StyledText = styled(Text)`
	text-align: center;
	font-size: ${theme('fontSizes.xl')};
	margin-right: ${ifProp('isRight', '10px')};

	&.editor {
		font-size: ${theme('fontSizes.xs')};
		margin-right: ${ifProp('isRight', '5px')};
	}
`;
const StyledIcon = styled(Icon)`
	margin-right: ${ifNotProp('isRight', '10px')};

	&.editor {
		margin-right: ${ifNotProp('isRight', '5px')};
	}
`;

const OffscreenIndicator = forwardRef((props, ref) => {
	const { type, direction, text, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);
	const isRight = direction === 'right';

	return (
		<StyledWrapper
			ref={ref}
			className={[type, direction]}
			display="inline-flex"
			flexDirection={isRight ? 'row-reverse' : 'row'}
			alignItems="center"
			isRight={isRight}
			bg={themeContext.colors.mapNavBackground || '#000'}
			{...omittedProps}
		>
			<StyledIcon
				className={type}
				iconSize={type === 'display' ? 'md' : 'xs'}
				name={`lg.triangle.${direction}`}
				color={props.color || themeContext.colors.mapNavText || '#fff'}
				isRight={isRight}
			/>
			<StyledText
				color={props.color || themeContext.colors.mapNavText || '#fff'}
				className={type}
				isRight={isRight}
				limitLinesOfTextTo={2}
			>
				{text}
			</StyledText>
		</StyledWrapper>
	);
});

OffscreenIndicator.displayName = 'Offscreen Indicator';

OffscreenIndicator.defaultProps = {
	'data-cy': 'OffscreenIndicator',
	type: 'display',
	direction: 'left',
	text: 'Add Text !!!',
};

export default OffscreenIndicator;

OffscreenIndicator.propTypes = {
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
	type: PropTypes.oneOf(['editor', 'display']),
	direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};
