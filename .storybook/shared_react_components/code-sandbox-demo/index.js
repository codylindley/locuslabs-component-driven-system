import PropTypes from 'prop-types';

const defaultStyles = {
	width: '100%',
	height: 350,
	border: 0,
	borderRadius: 4,
	overflow: 'hidden',
	margin: '20px 0',
};

export const Demo = ({
	id,
	title,
	autoResize,
	fontSize,
	hideNavigation,
	moduleView,
	theme,
	styles,
}) => (
	<iframe
		src={`https://codesandbox.io/embed/${id}?autoresize=${autoResize}&fontsize=${fontSize}&hidenavigation=${hideNavigation}&moduleview=${moduleView}&theme=${theme}`}
		style={{ ...defaultStyles, ...styles }}
		title={title}
		allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
		sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
	/>
);

Demo.defaultProps = {
	autoResize: '1',
	fontSize: '12',
	hideNavigation: '1',
	moduleView: '1',
	theme: 'dark',
	styles: defaultStyles,
};

Demo.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	autoResize: PropTypes.string,
	fontSize: PropTypes.string,
	hideNavigation: PropTypes.string,
	moduleView: PropTypes.string,
	theme: PropTypes.string,
	styles: PropTypes.shape({
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		border: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		overflow: PropTypes.oneOfType(['visible', 'hidden', 'scroll', 'auto']),
		margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	}),
};
