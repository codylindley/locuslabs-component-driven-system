import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import { rgba } from 'polished';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledWalkTimeMatrix = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
	border-radius: 8px;
	width: 1039px;
	overflow: hidden;

	/* When editor size */
	&.editor {
		filter: drop-shadow(${theme('shadows.xs')});
		border-radius: 4px;
		width: 520px;
	}
`;

const StyledSectionLabelWrapper = styled(Box)`
	background-color: ${theme('colors.mapNavBackground', '#000000')};
	min-height: 42px;

	/* When editor size */
	&.editor {
		min-height: 21px;
	}
`;

const StyledSectionLabel = styled(Text)`
	flex: 1 1 50%;
	padding: 6px 16px;
	background-color: ${theme('colors.mapNavBackground', '#000000')};
	color: ${theme('colors.mapNavText', '#FFFFFF')};
	word-break: break-all;
	font-weight: 500;
	font-size: ${theme('fontSizes.xl')};
	text-align: left;

	&:first-child {
		border-right: 1px solid
			${withProp(theme('colors.background', '#FFFFFF'), (background) =>
				rgba(background, 0.1)
			)};
	}

	&:last-child {
		border-right: none;
	}

	/* When only one column */
	&.single {
		flex: 1 1 auto;
		font-size: ${theme('fontSizes.xxl')};
		text-align: center;
	}

	/* When editor size */
	&.editor {
		padding: 3px 8px;
		font-size: ${theme('fontSizes.sm')};
	}
`;

const StyledColumnsWrapper = styled(Box)`
	background-color: ${withProp(
		theme('colors.background', '#FFFFFF'),
		(background) => rgba(background, 0.9)
	)};
	backdrop-filter: blur(8px);
	min-height: 168px;

	/* When editor size */
	&.editor {
		backdrop-filter: blur(4px);
		min-height: 84px;
	}
`;

const WalkTimeColumn = styled(Box)`
	flex: 1 1 0;

	&:first-child {
		border-right: 1px solid
			${withProp(theme('colors.primaryText', '#FFFFFF'), (primaryText) =>
				rgba(primaryText, 0.1)
			)};
	}

	&:last-child {
		border-right: none;
	}
`;

const WalkTimeItem = styled(Box)`
	flex: 1 1 auto;
	padding: 6px 16px;
	border-bottom: 1px solid
		${withProp(theme('colors.primaryText', '#FFFFFF'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};

	flex-direction: ${ifProp('isOnlyItem', 'column', 'row')};
	align-items: center;
	justify-content: space-between;

	&:last-child {
		border-bottom: none;
	}

	/* When only one item in a column */
	/* or only one column */
	&.single,
	&.long {
		justify-content: center;
	}

	/* When only one column and is one of two items */
	&.long.medium {
		padding: 18px 16px;
	}

	/* When only one column and is only item */
	&.long.single {
		padding: 32px 16px;
	}

	/* When editor size */
	&.editor {
		padding: 3px 8px;
	}

	/* When editor size with only one column and is one of two items */
	&.editor.long.medium {
		padding: 9px 8px;
	}

	/* When editor size with only one column and is only item */
	&.editor.long.single {
		padding: 16px 8px;
	}
`;

const StyledText = styled(Text)`
	font-size: ${theme('fontSizes.xxl')};
	word-break: break-all;
`;

const Label = styled(Box)`
	height: 44px;
	display: flex;
	align-items: center;

	/* When is only item in a column */
	&.single {
		max-width: 100%;
		align-self: flex-start;
		${StyledText} {
			font-size: ${theme('fontSizes.xxxl')};
		}
	}

	/* When there is only one column */
	&.long {
		max-width: 100%;
		justify-content: center;
	}

	/* When only one column and is one of two items */
	&.long.medium {
		height: 48px;
		${StyledText} {
			font-size: ${theme('fontSizes.xxxl')};
		}
	}

	/* When only one column and is only item */
	&.long.single {
		height: 48px;
		align-self: center;
		${StyledText} {
			font-size: ${theme('fontSizes.xxxl')};
		}
	}

	/* When editor size */
	&.editor {
		height: 22px;
		${StyledText} {
			font-size: ${theme('fontSizes.sm')};
		}
	}

	&.editor.single {
		${StyledText} {
			font-size: ${theme('fontSizes.md')};
		}
	}

	/* When editor size with only one column and is only item */
	/* or editor size with only one column and is one of two items */
	&.editor.long.single,
	&.editor.long.medium {
		height: 24px;
		${StyledText} {
			font-size: ${theme('fontSizes.md')};
		}
	}
`;

const PrimaryLabel = styled(Label)`
	width: 263px;
	margin-right: 16px;
	text-align: left;
	${StyledText} {
		color: ${theme('colors.primaryText', '#FFFFFF')};
		font-weight: 500;
	}

	/* When only item in a column */
	&.single {
		margin-right: 0;
		margin-bottom: 8px;
		width: auto;
		max-width: 100%;
		height: 48px;
	}

	/* When only one column */
	&.long {
		margin-right: 80px;
		max-width: 100%;
		width: 260px;
		text-align: center;
	}

	/* When only one column and is one of two items */
	&.long.medium {
		width: 312px;
	}

	/* When only one column and is only item in a column */
	&.long.single {
		margin-right: 0;
		width: auto;
	}

	/* When editor size */
	&.editor {
		width: 132px;
		margin-right: 8px;
	}

	/* When editor size and is only item in a column */
	&.editor.single {
		margin-bottom: 4px;
		margin-right: 0;
		height: 24px;
		width: auto;
		max-width: 100%;
	}

	/* When editor size and only one column */
	&.editor.long {
		margin-right: 40px;
		width: 130px;
	}

	/* When editor size with only one column and is one of two items */
	&.editor.long.medium {
		width: 154px;
	}

	/* When editor size with only one column and is only item */
	&.editor.long.single {
		margin-right: 0;
		width: auto;
	}
`;

const SecondaryLabel = styled(Label)`
	max-width: 208px;
	width: auto;

	${StyledText} {
		color: ${theme('colors.secondaryText', '#FFFFFF')};
		font-weight: 400;
	}

	/* When only one item in column */
	&.single {
		max-width: 100%;
		text-align: left;
	}

	/* When only one column */
	&.long {
		text-align: center;
		max-width: 208px;
		width: 208px;
	}

	/* When only one column and is one of two items */
	&.long.medium {
		max-width: 242px;
		width: 242px;
	}

	/* When only one column and is only item in a column */
	&.long.single {
		max-width: 100%;
		width: auto;
	}

	/* When editor size */
	&.editor {
		max-width: 104px;
	}

	/* When editor size and is only item in a column */
	&.editor.single {
		max-width: 100%;
	}

	/* When editor size with only one column and is one of two items */
	&.editor.long.medium {
		max-width: 122px;
		width: auto;
	}

	/* When editor size with only one column and is only item */
	&.editor.long.single {
		max-width: 100%;
	}
`;

const WalkTimeMatrix = forwardRef((props, ref) => {
	const { type, sections, ...omittedProps } = props;
	const isSingleColumn = sections?.length === 1; // Has only one column

	return (
		<StyledWalkTimeMatrix
			ref={ref}
			className={type}
			display="flex"
			flexDirection="column"
			alignItems="stretch"
			alignContent="stretch"
			{...omittedProps}
		>
			<StyledSectionLabelWrapper
				display="flex"
				flexDirection="row"
				className={type}
				data-cy="WalkTimeSectionWrapper"
			>
				{sections
					? sections.map((section, index) => {
							return (
								<StyledSectionLabel
									data-cy="WalkTimeColumnLabel"
									key={index}
									className={[type, isSingleColumn && 'single']}
									limitLinesOfTextTo={1}
								>
									{section.label}
								</StyledSectionLabel>
							);
					  })
					: null}
			</StyledSectionLabelWrapper>
			<StyledColumnsWrapper
				display="flex"
				flexDirection="row"
				className={type}
				data-cy="WalkTimeColumnsWrapper"
			>
				{sections
					? sections.map((section, index) => {
							return (
								<WalkTimeColumn
									key={index}
									data-cy="WalkTimeColumn"
									className={type}
									display="flex"
									flexDirection="column"
									alignItems="stretch"
									alignContent="stretch"
								>
									{section?.items?.map((row, index) => {
										const isOnlyItem = section?.items?.length === 1;
										const hasTwoItems = section?.items?.length === 2;
										const classNames = [
											type, // Component type, 'display' or 'editor'
											isSingleColumn && 'long', // Is only one column
											isOnlyItem && 'single', // Is only one item in a column
											hasTwoItems && 'medium', // Has two items in a column
										];

										if (!row.locationLabel && !row.walkTime) return null;
										return (
											<WalkTimeItem
												key={index}
												data-cy="WalkTimeItem"
												className={classNames}
												display="flex"
												isOnlyItem={isOnlyItem}
											>
												{
													<PrimaryLabel
														data-cy="WalkTimeItemLabel"
														className={classNames}
													>
														{row.locationLabel && (
															<StyledText limitLinesOfTextTo={1}>
																{row.locationLabel}
															</StyledText>
														)}
													</PrimaryLabel>
												}
												{
													<SecondaryLabel
														data-cy="WalkTimeItemLabel"
														className={classNames}
													>
														{row.walkTime && (
															<StyledText limitLinesOfTextTo={1}>
																{row.walkTime}
															</StyledText>
														)}
													</SecondaryLabel>
												}
											</WalkTimeItem>
										);
									})}
								</WalkTimeColumn>
							);
					  })
					: null}
			</StyledColumnsWrapper>
		</StyledWalkTimeMatrix>
	);
});

WalkTimeMatrix.displayName = 'Walk Time Matrix';

WalkTimeMatrix.defaultProps = {
	'data-cy': 'WalkTimeMatrix',
	type: 'display',
};

export default WalkTimeMatrix;

WalkTimeMatrix.propTypes = {
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
	type: PropTypes.oneOf(['display', 'editor']),
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			items: PropTypes.arrayOf(
				PropTypes.shape({
					locationLabel: PropTypes.string,
					walkTime: PropTypes.string,
				})
			),
		})
	),
};
