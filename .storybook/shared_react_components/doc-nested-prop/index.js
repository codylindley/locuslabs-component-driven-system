import PropTypes from 'prop-types';

/**
 * Render text with preserved whitespaces.
 */
const DocNestedProp = (props) => {
	return (
		<pre
			style={{
				padding: '0 5px',
				fontSize: '12px',
				lineHeight: '16px',
				tabSize: '15px',
				minWidth: 'max-content',
			}}
		>
			{props.children}
		</pre>
	);
};

DocNestedProp.defaultProps = {};

export default DocNestedProp;

DocNestedProp.propTypes = {
	children: PropTypes.node,
};
