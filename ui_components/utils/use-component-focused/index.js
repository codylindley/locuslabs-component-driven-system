import { useState, useEffect, useRef } from 'react';

const useComponentFocused = (initialIsFocused) => {
	const [isComponentFocused, setIsComponentFocused] =
		useState(initialIsFocused);
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentFocused(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return {
		ref,
		isComponentFocused,
		setIsComponentFocused,
	};
};

export default useComponentFocused;
