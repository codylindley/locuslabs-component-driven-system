export const stylePropList = {
	space: {
		name: 'space',
		reference: 'https://styled-system.com/table#space',
		api: 'https://styled-system.com/api#space',
		propList: [
			{
				propNames: ['m', 'margin'],
				cssProperties: ['margin'],
				themeField: 'space',
			},
			{
				propNames: ['mt', 'marginTop'],
				cssProperties: ['margin-top'],
				themeField: 'space',
			},
			{
				propNames: ['mt', 'marginTop'],
				cssProperties: ['margin-top'],
				themeField: 'space',
			},
			{
				propNames: ['mr', 'marginRight'],
				cssProperties: ['margin-right'],
				themeField: 'space',
			},
			{
				propNames: ['mb', 'marginBottom'],
				cssProperties: ['margin-bottom'],
				themeField: 'space',
			},
			{
				propNames: ['ml', 'marginLeft'],
				cssProperties: ['margin-left'],
				themeField: 'space',
			},
			{
				propNames: ['mx', 'marginLeft'],
				cssProperties: ['margin-left', 'margin-right'],
				themeField: 'space',
			},
			{
				propNames: ['my', 'marginLeft'],
				cssProperties: ['margin-top', 'margin-bottom'],
				themeField: 'space',
			},
			{
				propNames: ['p', 'padding'],
				cssProperties: ['padding'],
				themeField: 'space',
			},
			{
				propNames: ['pt', 'paddingTop'],
				cssProperties: ['padding-top'],
				themeField: 'space',
			},
			{
				propNames: ['pr', 'paddingRight'],
				cssProperties: ['padding-right'],
				themeField: 'space',
			},
			{
				propNames: ['pr', 'paddingRight'],
				cssProperties: ['padding-right'],
				themeField: 'space',
			},
			{
				propNames: ['pb', 'paddingBottom'],
				cssProperties: ['padding-bottom'],
				themeField: 'space',
			},
			{
				propNames: ['pl', 'paddingLeft'],
				cssProperties: ['padding-left'],
				themeField: 'space',
			},
			{
				propNames: ['px', 'paddingLeft'],
				cssProperties: ['padding-left', 'padding-right'],
				themeField: 'space',
			},
			{
				propNames: ['py', 'padding-top'],
				cssProperties: ['padding-left', 'padding-bottom'],
				themeField: 'space',
			},
			{
				propNames: ['borderX'],
				cssProperties: ['border-left', 'border-right'],
				themeField: 'space',
			},
		],
	},
	color: {
		name: 'color',
		reference: 'https://styled-system.com/table#color',
		api: 'https://styled-system.com/api#color',
		propList: [
			{
				propNames: ['color'],
				cssProperties: ['color'],
				themeField: 'colors',
			},
			{
				propNames: ['bg', 'backgroundColor'],
				cssProperties: ['background-color'],
				themeField: 'colors',
			},
			{
				propNames: ['opacity'],
				cssProperties: ['opacity'],
			},
		],
	},
	typography: {
		name: 'typography',
		reference: 'https://styled-system.com/table#typography',
		api: 'https://styled-system.com/api#typography',
		propList: [
			{
				propNames: ['fontFamily'],
				cssProperties: ['font-family'],
				themeField: 'fonts',
			},
			{
				propNames: ['fontSize'],
				cssProperties: ['font-size'],
				themeField: 'fontSizes',
			},
			{
				propNames: ['fontWeight'],
				cssProperties: ['font-weight'],
				themeField: 'fontWeights',
			},
			{
				propNames: ['lineHeight'],
				cssProperties: ['line-height'],
				themeField: 'lineHeights',
			},
			{
				propNames: ['letterSpacing'],
				cssProperties: ['letter-spacing'],
				themeField: 'letterSpacings',
			},
			{
				propNames: ['textAlign'],
				cssProperties: ['text-align'],
			},
			{
				propNames: ['fontStyle'],
				cssProperties: ['font-style'],
			},
		],
	},
	layout: {
		name: 'layout',
		reference: 'https://styled-system.com/table#layout',
		api: 'https://styled-system.com/api#layout',
		propList: [
			{
				propNames: ['width'],
				cssProperties: ['width'],
				themeField: 'sizes',
			},
			{
				propNames: ['height'],
				cssProperties: ['height'],
				themeField: 'sizes',
			},
			{
				propNames: ['minWidth'],
				cssProperties: ['min-width'],
				themeField: 'sizes',
			},
			{
				propNames: ['maxWidth'],
				cssProperties: ['max-width'],
				themeField: 'sizes',
			},
			{
				propNames: ['minHeight'],
				cssProperties: ['min-height'],
				themeField: 'sizes',
			},
			{
				propNames: ['maxHeight'],
				cssProperties: ['max-height'],
				themeField: 'sizes',
			},
			{
				propNames: ['size'],
				cssProperties: ['width', 'height'],
				themeField: 'sizes',
			},
			{
				propNames: ['display'],
				cssProperties: ['display'],
				themeField: 'sizes',
			},
			{
				propNames: ['verticalAlign'],
				cssProperties: ['vertical-align'],
			},
			{
				propNames: ['overflow'],
				cssProperties: ['overflow'],
			},
			{
				propNames: ['overflowX'],
				cssProperties: ['overflowX'],
			},
			{
				propNames: ['overflowy'],
				cssProperties: ['overflowy'],
			},
		],
	},
	flexbox: {
		name: 'flexbox',
		reference: 'https://styled-system.com/table#flexbox',
		api: 'https://styled-system.com/api#flexbox',
		propList: [
			{
				propNames: ['alignItems'],
				cssProperties: ['align-items'],
			},
			{
				propNames: ['alignContent'],
				cssProperties: ['align-content'],
			},
			{
				propNames: ['justifyItems'],
				cssProperties: ['justify-items'],
			},
			{
				propNames: ['justifyContent'],
				cssProperties: ['justify-content'],
			},
			{
				propNames: ['flexWrap'],
				cssProperties: ['flex-wrap'],
			},
			{
				propNames: ['flexDirection'],
				cssProperties: ['flex-direction'],
			},
			{
				propNames: ['flex'],
				cssProperties: ['flex'],
			},
			{
				propNames: ['flexGrow'],
				cssProperties: ['flex-grow'],
			},
			{
				propNames: ['flexShrink'],
				cssProperties: ['flex-shrink'],
			},
			{
				propNames: ['flexBasis'],
				cssProperties: ['flex-basis'],
			},
			{
				propNames: ['justifySelf'],
				cssProperties: ['justify-self'],
			},
			{
				propNames: ['alignSelf'],
				cssProperties: ['align-self'],
			},
			{
				propNames: ['order'],
				cssProperties: ['order'],
			},
		],
	},
	'grid-layout': {
		name: 'grid-layout',
		reference: 'https://styled-system.com/table#grid-layout',
		api: 'https://styled-system.com/api#grid-layout',
		propList: [
			{
				propNames: ['gridGap'],
				cssProperties: ['grid-gap'],
				themeField: 'space',
			},
			{
				propNames: ['gridRowGap'],
				cssProperties: ['grid-row-gap'],
				themeField: 'space',
			},
			{
				propNames: ['gridColumnGap'],
				cssProperties: ['grid-column-gap'],
				themeField: 'space',
			},
			{
				propNames: ['gridColumn'],
				cssProperties: ['grid-column'],
			},
			{
				propNames: ['gridRow'],
				cssProperties: ['grid-row'],
			},
			{
				propNames: ['gridArea'],
				cssProperties: ['grid-area'],
			},
			{
				propNames: ['gridAutoFlow'],
				cssProperties: ['grid-auto-flow'],
			},
			{
				propNames: ['gridAutoRows'],
				cssProperties: ['grid-auto-rows'],
			},
			{
				propNames: ['gridAutoColumns'],
				cssProperties: ['grid-auto-columns'],
			},
			{
				propNames: ['gridTemplateRows'],
				cssProperties: ['grid-template-rows'],
			},
			{
				propNames: ['gridTemplateColumns'],
				cssProperties: ['grid-template-columns'],
			},
			{
				propNames: ['gridTemplateAreas'],
				cssProperties: ['grid-template-areas'],
			},
		],
	},
	background: {
		name: 'background',
		reference: 'https://styled-system.com/table#background',
		api: 'https://styled-system.com/api#background',
		propList: [
			{
				propNames: ['background'],
				cssProperties: ['background'],
			},
			{
				propNames: ['backgroundImage'],
				cssProperties: ['background-image'],
			},
			{
				propNames: ['backgroundSize'],
				cssProperties: ['background-size'],
			},
			{
				propNames: ['backgroundPosition'],
				cssProperties: ['background-position'],
			},
			{
				propNames: ['backgroundRepeat'],
				cssProperties: ['background-repeat'],
			},
		],
	},
	border: {
		name: 'border',
		reference: 'https://styled-system.com/table#border',
		api: 'https://styled-system.com/api#border',
		propList: [
			{
				propNames: ['border'],
				cssProperties: ['border'],
				themeField: 'borders',
			},
			{
				propNames: ['borderWidth'],
				cssProperties: ['border-width'],
				themeField: 'borderWidths',
			},
			{
				propNames: ['borderStyle'],
				cssProperties: ['border-style'],
				themeField: 'borderStyles',
			},
			{
				propNames: ['borderColor'],
				cssProperties: ['border-color'],
				themeField: 'colors',
			},
			{
				propNames: ['borderRadius'],
				cssProperties: ['border-radius'],
				themeField: 'radii',
			},
			{
				propNames: ['borderTop'],
				cssProperties: ['border-top'],
				themeField: 'borders',
			},
			{
				propNames: ['borderTopWidth'],
				cssProperties: ['border-top-width'],
				themeField: 'borderWidths',
			},
			{
				propNames: ['borderTopStyle'],
				cssProperties: ['border-top-style'],
				themeField: 'borderStyles',
			},
			{
				propNames: ['borderTopColor'],
				cssProperties: ['border-top-color'],
				themeField: 'colors',
			},
			{
				propNames: ['borderTopLeftRadius'],
				cssProperties: ['border-top-left-radius'],
				themeField: 'radii',
			},
			{
				propNames: ['borderTopRightRadius'],
				cssProperties: ['border-top-left-radius'],
				themeField: 'radii',
			},
			{
				propNames: ['borderRight'],
				cssProperties: ['border-right'],
				themeField: 'borders',
			},
			{
				propNames: ['borderRightWidth'],
				cssProperties: ['border-right-width'],
				themeField: 'borderWidths',
			},
			{
				propNames: ['borderRightStyle'],
				cssProperties: ['border-right-style'],
				themeField: 'borderStyles',
			},
			{
				propNames: ['borderRightColor'],
				cssProperties: ['border-right-color'],
				themeField: 'colors',
			},
			{
				propNames: ['borderBottom'],
				cssProperties: ['border-bottom'],
				themeField: 'borders',
			},
			{
				propNames: ['borderBottomWidth'],
				cssProperties: ['border-bottom-width'],
				themeField: 'borderWidths',
			},
			{
				propNames: ['borderBottomStyle'],
				cssProperties: ['border-bottom-style'],
				themeField: 'borderStyles',
			},
			{
				propNames: ['borderBottomColor'],
				cssProperties: ['border-bottom-color'],
				themeField: 'colors',
			},
			{
				propNames: ['borderBottomLeftRadius'],
				cssProperties: ['border-bottom-left-radius'],
				themeField: 'radii',
			},
			{
				propNames: ['borderBottomRightRadius'],
				cssProperties: ['border-bottom-right-radius'],
				themeField: 'radii',
			},
			{
				propNames: ['borderLeft'],
				cssProperties: ['border-left'],
				themeField: 'borders',
			},
			{
				propNames: ['borderLeftWidth'],
				cssProperties: ['border-left-width'],
				themeField: 'borderWidths',
			},
			{
				propNames: ['borderLeftStyle'],
				cssProperties: ['border-left-style'],
				themeField: 'borderStyles',
			},
			{
				propNames: ['borderLeftColor'],
				cssProperties: ['border-left-color'],
				themeField: 'colors',
			},
			{
				propNames: ['borderX'],
				cssProperties: ['border-left', 'border-right'],
				themeField: 'borders',
			},
			{
				propNames: ['borderY'],
				cssProperties: ['border-top', 'border-bottom'],
				themeField: 'borders',
			},
		],
	},
	position: {
		name: 'position',
		reference: 'https://styled-system.com/table#position',
		api: 'https://styled-system.com/api#position',
		propList: [
			{
				propNames: ['position'],
				cssProperties: ['position'],
			},
			{
				propNames: ['zIndex'],
				cssProperties: ['z-index'],
				themeField: 'zIndices',
			},
			{
				propNames: ['top'],
				cssProperties: ['top'],
				themeField: 'space',
			},
			{
				propNames: ['right'],
				cssProperties: ['right'],
				themeField: 'space',
			},
			{
				propNames: ['bottom'],
				cssProperties: ['bottom'],
				themeField: 'space',
			},
			{
				propNames: ['left'],
				cssProperties: ['left'],
				themeField: 'space',
			},
		],
	},
	shadow: {
		name: 'shadow',
		reference: 'https://styled-system.com/table#shadow',
		api: 'https://styled-system.com/api#shadow',
		propList: [
			{
				propNames: ['textShadow'],
				cssProperties: ['text-shadow'],
				themeField: 'shadows',
			},
			{
				propNames: ['boxShadow'],
				cssProperties: ['box-shadow'],
				themeField: 'shadows',
			},
		],
	},
};
