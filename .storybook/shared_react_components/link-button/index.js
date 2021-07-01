const LinkButton = ({ link, primaryText, secondaryText }) => {
	const transformText = (text) => text?.split(' ').join('_') || '';

	return (
		<div style={{ margin: '10px 0' }}>
			<a target="_blank" href={link}>
				<img
					src={`https://img.shields.io/badge/${transformText(
						primaryText
					)}-${transformText(secondaryText)}-blue`}
				></img>
			</a>
		</div>
	);
};

export default LinkButton;
