import React from 'react';

import { deviceTypes } from '../../shared_js_modules/consts';

const ComponentTitle = (props) => {
	const { packageName, componentType = 'primitive' } = props;

	const nameArr = packageName.split('/')[1].split('-'); // get rid of '@locus-labs/' and separate each word
	let targetsDevice = false;

	if (deviceTypes.includes(nameArr[1])) targetsDevice = true; // check if package name targets specific device

	const componentName = nameArr.slice(targetsDevice ? 2 : 1).join(' '); // get remaining name words
	return `
			${nameArr[0].toUpperCase()} Components > 
			${targetsDevice ? `${nameArr[1]} >` : ''} 
			${componentType} Component > 
			${componentName}
	`;
};

export default ComponentTitle;
