import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { ThemeContext } from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';

const NoSearchResultsInfo = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	const {
		noSearchResultsInfo: { primaryLabel, secondaryLabel },
		...omittedProps
	} = props;
	return (
		<Box
			ref={ref}
			position="relative"
			width="320px"
			padding="10px 14px 12px"
			display="flex"
			alignItems="center"
			background={themeContext.colors.background}
			{...omittedProps}
		>
			<Icon
				name="no.results"
				marginRight="14px"
				iconSize="lg"
				color={themeContext.colors.secondaryText}
			/>
			<Box>
				<Text
					limitLinesOfTextTo={1}
					fontSize={props.fontSize || 'lg'}
					fontWeight="500"
					lineHeight="24px"
					color={themeContext.colors.primaryText}
				>
					{primaryLabel}
				</Text>
				<Text
					limitLinesOfTextTo={1}
					fontSize="md"
					lineHeight="18px"
					color={themeContext.colors.secondaryText}
				>
					{secondaryLabel}
				</Text>
			</Box>
		</Box>
	);
});

NoSearchResultsInfo.displayName = 'No Search Results Info';

NoSearchResultsInfo.defaultProps = {
	'data-cy': 'NoSearchResultsInfo',
};

export default NoSearchResultsInfo;

NoSearchResultsInfo.propTypes = {
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
	noSearchResultsInfo: PropTypes.shape({
		primaryLabel: PropTypes.string,
		secondaryLabel: PropTypes.string,
	}).isRequired,
};
