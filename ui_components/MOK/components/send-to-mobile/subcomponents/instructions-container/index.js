import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import Icon from '@locus-labs/mok-icon';

const InstructionsWrapper = styled(Box)`
	position: relative;
	width: 360px;
	height: 244px;
	padding-top: 10px;
`;

const PhoneIconContainer = styled(Box)`
	position: absolute;
	top: 0;
	left: 193px;
`;

const PrimaryLabel = styled(Text)`
	color: ${({ theme }) => theme.colors.primary || '#000000'};
	line-height: 30px;
`;

const SecondaryLabel = styled(Text)`
	color: ${({ theme }) => theme.colors.primaryText || '#000000'};
`;

const InstructionsContainer = forwardRef((props, ref) => {
	const {
		instructions: { title, labels = [] },
		...omittedProps
	} = props;

	return (
		<InstructionsWrapper ref={ref} {...omittedProps}>
			<PhoneIconContainer>
				<Icon name="send.to.mobile.iphone" width="150px" height="255px" />
			</PhoneIconContainer>
			<Box marginBottom="28px" position="relative">
				<PrimaryLabel fontSize="lg" fontWeight="semiBold">
					{title}
				</PrimaryLabel>
			</Box>
			{labels?.map((label, index) => (
				<Box
					key={index}
					marginBottom="18px"
					padding="10px 0"
					position="relative"
				>
					<SecondaryLabel fontSize="md" fontWeight="normal" lineHeight="27px">
						{`${index + 1}. ${label}`}
					</SecondaryLabel>
				</Box>
			))}
		</InstructionsWrapper>
	);
});

InstructionsContainer.displayName = 'Instructions Container';

InstructionsContainer.defaultProps = {
	'data-cy': 'InstructionsContainer', // component name
};

InstructionsContainer.propTypes = {
	instructions: PropTypes.objectOf(
		PropTypes.shape({
			title: PropTypes.string,
			labels: PropTypes.arrayOf(PropTypes.string),
		})
	),
};

export default InstructionsContainer;
