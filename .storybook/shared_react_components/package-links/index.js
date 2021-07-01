import UsePackageName from '../use-package-name';

const PackageLinks = ({ packageName, componentType }) => {
	return (
		<div style={{ margin: '20px 0 30px' }}>
			<UsePackageName name={packageName} as="npmShield" />
			<UsePackageName name={packageName} as="npmfs" />
			<UsePackageName
				name={packageName}
				componentType={componentType}
				as="gitlabLink"
			/>
		</div>
	);
};

export default PackageLinks;
