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
			'WithExternalListChange'
		);
	});

	it('Replacing list items with the same length works', () => {
		cy.get('[data-cy=SearchResult]').eq(0).should('contain.text', '0');
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy="SortItemsButton"]').click();
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=SearchResult]').eq(0).should('contain.text', '98');
	});

	it('Replacing list items with different length works', () => {
		cy.get('[data-cy=SearchResult]').its('length').should('eq', 9);
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy="ReplaceItemsButton"]').click();
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=SearchResult]').its('length').should('not.be.gt', 8);
	});
});
