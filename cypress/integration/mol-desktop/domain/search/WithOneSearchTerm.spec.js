describe('Search Component with one search term', () => {
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
			'WithOneSearchTerm'
		);
	});

	it('Collapsible Content height adjusts', () => {
		let initialHeight;
		cy.get('[data-cy=CollapsibleContent]').then(($content) => {
			initialHeight = $content[0].clientHeight;
		});
		cy.get('[data-cy=SearchInput] input').click({ force: true });
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.wait(400); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=CollapsibleContent]').then(($content) => {
			expect($content[0].clientHeight).to.be.lessThan(initialHeight);
		});
		cy.get('[data-cy=BackButton]').click({ force: true });
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
	});
});
