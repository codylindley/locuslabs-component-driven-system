import { useState } from 'react';
import SearchInput from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title:
		'MOL Components/Desktop/Domain Components/Search/Subcomponents/Search Input',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SearchInput,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11351%3A84580',
		},
	},
};

const SearchInputTemplate = (props) => {
	const { term: initialTerm, ...omittedProps } = props;

	const [term, setTerm] = useState(
		initialTerm || ''
	); /* eslint react/prop-types: 0 */

	const onSearchTermChange = (term) => {
		setTerm(term);
	};

	const onBackButtonClick = () => {
		setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};
	const onClearButtonClick = () => {
		setTerm('');
		window.sessionStorage.setItem('Clear button was clicked', true);
	};
	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};
	const onInputFocus = () => {
		window.sessionStorage.setItem('Input was focused', true);
	};
	const onReturnKeyPress = () => {
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	return (
		<SearchInput
			term={term}
			onSearchTermChange={onSearchTermChange}
			onBackButtonClick={onBackButtonClick}
			onClearButtonClick={onClearButtonClick}
			onDirectionsIconClick={onDirectionsIconClick}
			onInputFocus={onInputFocus}
			onReturnKeyPress={onReturnKeyPress}
			{...omittedProps}
		/>
	);
};

export const Default = () => {
	return <SearchInputTemplate />;
};

export const WithSearchTerm = () => {
	return <SearchInputTemplate term="coff" />;
};

export const WithLongSearchTerm = () => {
	return <SearchInputTemplate term="really long search term" />;
};

export const WithCustomPlaceholder = () => {
	return <SearchInputTemplate placeholder="Custom placeholder" />;
};
