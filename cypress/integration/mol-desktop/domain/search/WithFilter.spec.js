describe('Search Component with Filter', () => {
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
			'WithFilter'
		);
	});

	it('Filter appears on confirmed search', () => {
		cy.get('[data-cy=SearchInput] input').type('shop{enter}');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=Filter]').should('exist');
		cy.get('[data-cy=SearchInput] input').type('{backspace}');
		cy.get('[data-cy=Filter]').should('not.exist');
	});

	it('Filter dropdown collapses on option click', () => {
		cy.get('[data-cy=SearchInput] input').type('shop{enter}');
		cy.get('[data-cy=Filter]').should('exist');
		cy.get('[data-cy=FilterDropdown]').click({ force: true });
		cy.get('[data-cy=FilterOptions]').should('exist');
		cy.get('[data-cy=FilterOption]').eq(1).click({ force: true });
		cy.get('[data-cy=FilterOptions]').should('not.exist');
	});

	it('Search results list scrolls up on filter option change', () => {
		cy.get('[data-cy=SearchInput] input').type('shop{enter}');
		cy.get('[data-cy=Filter]').should('exist');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('.search-results-items-list').scrollTo(0, 100);
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.not.equal(0)
		);
		cy.get('[data-cy=FilterDropdown]').click({ force: true });
		cy.get('[data-cy=FilterOptions]').should('exist');
		cy.get('[data-cy=FilterOption]').eq(1).click({ force: true });
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.equal(0)
		);
	});

	it('List expands when filter dropdown is clicked', () => {
		cy.get('[data-cy=SearchInput] input').type('shop{enter}');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=CollapsibleContent] [data-cy=InnerContent]').should(
			'be.hidden'
		);
		cy.get('[data-cy=FilterDropdown]').click({ force: true });
		cy.get('[data-cy=CollapsibleContent] [data-cy=InnerContent]').should(
			'be.visible'
		);
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
	});
});
