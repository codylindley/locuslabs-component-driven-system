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
			'Default'
		);
	});

	it('There is limited items amount rendered in DOM', () => {
		cy.get('[data-cy=SearchResult]').its('length').should('eq', 10);
	});

	it('Scrolled to items are being rendered in DOM', () => {
		cy.get('.search-results-items-list').scrollTo(0, 250, {
			ensureScrollable: true,
		});
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=SearchResult]').its('length').should('be.gt', 10);
	});

	it('Search term click event is firing', () => {
		cy.get('[data-cy=SearchTermRow]')
			.eq(0)
			.trigger('click')
			.should(() => {
				expect(
					window.sessionStorage.getItem('term Parking was clicked')
				).to.equal('true');
			});
	});

	it('List does not re-render when collapsed and expanded', () => {
		cy.get('.search-results-items-list').scrollTo(0, 600);
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('.search-results-items-list').scrollTo(0, 600);
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=SearchResult] [data-cy=PrimaryLabel]')
			.eq(0)
			.should('have.text', 'Way Out West');
		cy.get('[data-cy=CollapseButton]').trigger('click');
		cy.get('[data-cy=CollapseButton]').trigger('click');
		cy.get('[data-cy=SearchResult] [data-cy=PrimaryLabel]')
			.eq(0)
			.should('have.text', 'Way Out West');
	});
});
