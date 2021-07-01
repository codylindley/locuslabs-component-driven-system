describe('Search Component', () => {
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
		cy.loadStory('MOL Components/Desktop/Domain Components/Search', 'Default');
	});

	it('Clicking search icon activates search ', () => {
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
		cy.get('[data-cy=SearchButton]').click();
		cy.get('[data-cy=SearchInput] input').should('have.focus');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchButton]').should('not.exist');
		cy.get('[data-cy=BackButton]').should('exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
	});

	it('Clicking search input activates search ', () => {
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
		cy.get('[data-cy=SearchInput] input').click();
		cy.get('[data-cy=SearchInput] input').should('have.focus');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchButton]').should('not.exist');
		cy.get('[data-cy=BackButton]').should('exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
	});

	it('Populated input has close icon', () => {
		cy.get('[data-cy=SearchInput] input').type('shop');
		cy.get('[data-cy=ClearButton]').should('exist');
		cy.get('[data-cy=SearchInput] input').clear();
		cy.get('[data-cy=ClearButton]').should('not.exist');
		cy.get('[data-cy=SearchInput] input').type('shop');
		cy.get('[data-cy=ClearButton]').should('exist');
	});

	it('User clicks close icon', () => {
		cy.get('[data-cy=SearchInput] input').type('shop');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=ClearButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').should('have.focus');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=BackButton]').should('exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
	});

	it('User clicks arrow (home) icon', () => {
		cy.get('[data-cy=SearchInput] input').type('shop');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=BackButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=BackButton]').should('not.exist');
		cy.get('[data-cy=SearchButton]').should('exist');
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
	});

	it('Search typeahead works', () => {
		cy.get('[data-cy=SearchInput] input').type('sh');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchInput] input').type('o');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
	});

	it('POIs results display only when at least 3 characters are typed', () => {
		cy.get('[data-cy=SearchInput] input').type('sh');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchInput] input').type('o');
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchInput] input').type('{backspace}');
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
	});

	it('"No matches found" info displays', () => {
		cy.get('[data-cy=SearchInput] input').type(
			'this will result in no matches'
		);
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
		cy.get('[data-cy=NoSearchResultsInfo]').should('exist');
		cy.get('[data-cy=BackButton]').click({ force: true });
		cy.get('[data-cy=NoSearchResultsInfo]').should('not.exist');
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
	});

	it('Search results list scrolls up on search terms change', () => {
		cy.get('[data-cy=SearchInput] input').type('sho');
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.equal(0)
		);
		cy.get('.search-results-items-list').scrollTo(0, 100);
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.not.equal(0)
		);
		cy.get('[data-cy=SearchInput] input').type('p');
		cy.wait(500); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('.search-results-items-list').then(($el) => {
			expect($el[0].scrollTop).to.equal(0);
		});
		cy.get('.search-results-items-list').scrollTo(0, 100);
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.not.equal(0)
		);
		cy.get('[data-cy=SearchInput] input').clear();
		cy.wait(500); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('.search-results-items-list').then(($el) =>
			expect($el[0].scrollTop).to.equal(0)
		);
	});

	it('Search goes back to initial state when outside click is detected', () => {
		cy.get('[data-cy=SearchInput] input').click({ force: true });
		cy.get('[data-cy=SearchInput] input').should('have.focus');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchTermRow]').should('exist');
		cy.get('body').click(0, 0);
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
		cy.get('[data-cy=SearchButton]').should('exist');
		cy.get('[data-cy=BackButton]').should('not.exist');
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
	});

	it('User search is preserved when outside click is detected', () => {
		cy.get('[data-cy=SearchInput] input').type('shop');
		cy.get('[data-cy=SearchTermRow]').should('exist');
		cy.get('body').click(0, 0);
		cy.get('[data-cy=SearchInput] input').invoke('val').should('eq', 'shop');
		cy.get('[data-cy=SearchButton]').should('not.exist');
		cy.get('[data-cy=BackButton]').should('exist');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
	});

	it('List expands when search input is focused', () => {
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=CollapsibleContent] [data-cy=InnerContent]').should(
			'be.hidden'
		);
		cy.get('[data-cy=SearchInput] input').click({ force: true });
		cy.get('[data-cy=SearchTermRow]').should('exist');
		cy.get('[data-cy=CollapsibleContent] [data-cy=InnerContent]').should(
			'be.visible'
		);
	});

	it('Search term can be cleared with "Esc" key hit', () => {
		cy.get('[data-cy=SearchInput] input').type('sho');
		cy.get('[data-cy=SuggestedSearchRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchInput] input').type('{esc}');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
		cy.get('[data-cy=ClearButton]').should('not.exist');
		cy.get('[data-cy=BackButton]').should('not.exist');
		cy.get('[data-cy=SearchButton]').should('exist');
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchPOIRow]').should('not.exist');
		cy.get('[data-cy=SearchTermRow]').should('not.exist');
	});

	it('Clicking search term populates input', () => {
		cy.get('[data-cy=SearchInput] input').click();
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchTermRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SearchTermRow]').eq(0).click();
		cy.get('[data-cy=SearchInput] input').invoke('val').should('not.be.empty');
	});

	it('Clicking search suggestion populates input', () => {
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SuggestedSearchRow]').its('length').should('be.gt', 0);
		cy.get('[data-cy=SuggestedSearchRow]').eq(0).click();
		cy.get('[data-cy=SearchInput] input').invoke('val').should('not.be.empty');
	});

	it("Logo doesn't display if logo props are not defined", () => {
		cy.get('[data-cy=Logo]').should('not.exist');
	});
});
