describe('Search - Search Results List Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Search Results List//Search Results List',
			'WithOneResult'
		);
	});

	it('There is one search result', () => {
		cy.get('[data-cy=SearchResult]').its('length').should('eq', 1);
	});

	it('Collapsible content height adjusted to content height', () => {
		cy.get('[data-cy="CollapsibleContent"]').should(
			'have.css',
			'height',
			'72px'
		);
	});
});
