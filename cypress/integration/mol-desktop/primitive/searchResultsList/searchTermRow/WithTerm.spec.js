describe('Search - Search Term Row Component', () => {
	// Note the use of `before`
	before(() => {
		// Visit the storybook iframe page once per file
		cy.visitStorybook();
	});

	// Note the use of `beforeEach`
	beforeEach(() => {
		// The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
		// The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
		// This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
		cy.loadStory(
			'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/Search Term Row',
			'WithTerm'
		);
	});

	it('Search Term Row has search icon', () => {
		cy.get('[data-cy=SearchTermRow] svg')
			.should(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/search.web.svg'
			)
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px');
	});
});
