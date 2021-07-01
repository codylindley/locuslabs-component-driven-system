describe('Building Level Selector Component', () => {
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
			'MOK Components/Domain Components/Building Level Selector',
			'WithSearchResults'
		);
	});

	it('Building Level Selector displays search results info', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=SearchResultsIndicator]').should('exist');
		cy.get(
			'[data-cy=BuildingAccordion]:first [data-cy=BuildingRow] [data-cy=SearchResultsIndicator]'
		)
			.should('exist')
			.and('have.text', '99+');
		cy.get('[data-cy=BuildingRow]').first().click({ force: true });
		cy.get(
			'[data-cy=BuildingAccordion]:first [data-cy=LevelRow]:first [data-cy=SearchResultsIndicator]'
		)
			.should('exist')
			.and('have.text', '99+');
		cy.get('[data-cy=SearchResultsIndicator]').should('exist');
	});
});
