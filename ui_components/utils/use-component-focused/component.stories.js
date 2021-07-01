import { useEffect } from 'react';
import useComponentFocused from '.';

import componentDocumentation from './docs.mdx';

export default {
	title: 'Utils/Use Component Focused',
	component: useComponentFocused,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
	},
};

export const Default = () => {
	const { ref, isComponentFocused, setIsComponentFocused } =
		useComponentFocused(false);

	const handleInputFocus = () =>
		!isComponentFocused && setIsComponentFocused(!isComponentFocused);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<p style={{ marginBottom: '20px' }}>
				Click the input and outside of it to check how the focus state changes.
			</p>
			<input
				ref={ref}
				onFocus={handleInputFocus}
				value={`Input is ${!isComponentFocused ? 'not ' : ''}focused`}
				style={{ padding: '10px 15px' }}
			></input>
		</div>
	);
};

export const ComponentFocusedByDefault = () => {
	const { ref, isComponentFocused, setIsComponentFocused } =
		useComponentFocused(true);

	useEffect(() => {
		if (isComponentFocused) ref.current.focus();
	}, [isComponentFocused]);

	const handleInputFocus = () =>
		!isComponentFocused && setIsComponentFocused(!isComponentFocused);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<p style={{ marginBottom: '20px' }}>
				This component should be focused by default. Click the input and outside
				of it to check how the focus state changes.
			</p>
			<input
				ref={ref}
				onFocus={handleInputFocus}
				value={`Input is ${!isComponentFocused ? 'not ' : ''}focused`}
				style={{ padding: '10px 15px' }}
			></input>
		</div>
	);
};
