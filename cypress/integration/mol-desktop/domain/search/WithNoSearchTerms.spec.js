describe('Search Component with no search terms', () => {
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
			'MOL Components/Desktop/Domain Components/Search',
			'WithNoSearchTerms'
		);
	});

	it('"No matches found" info displays when there are no search terms', () => {
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchInput] input').click();
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
		cy.get('[data-cy=NoSearchResultsInfo]').should('exist');
	});
});
