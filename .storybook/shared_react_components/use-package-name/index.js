import React from 'react';

import {
	deviceTypes,
	componentTypesPath,
} from '../../shared_js_modules/consts';
import LinkButton from '../link-button';

const getComponentGitlabLink = ({
	packageName,
	componentType = 'primitive',
}) => {
	// Link example: https://gitlab.com/locuslabs/design-system-team/ui-components/-/blob/master/ui_components/MOK/primitive-components/badge/index.js
	const nameArr = packageName.split('/')[1].split('-'); // get rid of '@locus-labs/' and separate each word
	let targetsDevice = false;

	if (deviceTypes.includes(nameArr[1])) targetsDevice = true; // check if package name targets specific device

	const componentName =
		componentTypesPath[componentType] == componentTypesPath.theme // whole package name should be preserved for themes link
			? nameArr.join('-')
			: nameArr.slice(targetsDevice ? 2 : 1).join('-'); // get remaining name words
	return `https://gitlab.com/locuslabs/design-system-team/ui-components/-/blob/master/ui_components/
			${nameArr[0].toUpperCase()}/
			${targetsDevice ? `${nameArr[1]}/` : ''}
			${componentTypesPath[componentType]}/
			${componentName}/index.js
	`;
};

const UsePackageName = (props) => {
	const { name, componentType, as } = props;

	if (as === 'npmShield')
		return (
			<div style={{ margin: '10px 0' }}>
				<a target="_blank" href={`https://www.npmjs.com/package/${name}`}>
					<img
						src={`https://img.shields.io/npm/v/${name}?color=%231EA7FD&label=npm%20version&style=for-the-badge/@latest`}
					></img>
				</a>
			</div>
		);
	if (as === 'npmfs')
		return (
			<LinkButton
				link={`https://npmfs.com/package/${name}`}
				primaryText="package version"
				secondaryText="npmfs"
			/>
		);
	if (as === 'gitlabLink')
		return (
			<LinkButton
				link={getComponentGitlabLink({ packageName: name, componentType })}
				primaryText="source code"
				secondaryText="gitlab"
			/>
		);

	return <div>{name}</div>;
};

export default UsePackageName;
