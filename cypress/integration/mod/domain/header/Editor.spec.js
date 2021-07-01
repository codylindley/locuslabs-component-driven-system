describe('Header Component - Sm', () => {
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
		cy.loadStory('MOD Components/Domain Components/Header', 'Editor');
	});

	it('Header component has correct styling', () => {
		cy.get('[data-cy=Header]')
			.eq(0)
			.should('have.css', 'justify-content', 'space-between')
			.and('have.css', 'background-color', 'rgb(34, 102, 221)')
			.and('have.css', 'padding', '12px 14px')
			.and('have.css', 'width', '540px');

		cy.get('[data-cy=Header] [data-cy=Logo]').each(($el) => {
			cy.wrap($el)
				.should('be.visible')
				.and(($img) => {
					// "naturalWidth" and "naturalHeight" are set when the image loads
					expect($img[0].naturalWidth).to.be.greaterThan(0);
				});
		});

		cy.get('[data-cy=Header]').each(($el) => {
			const height = $el[0].offsetHeight;
			expect(height).to.be.at.least(42);
			expect(height).to.be.lessThan(75);
		});
	});

	it('Header text has correct styling', () => {
		cy.get('[data-cy=Header] [data-cy=Text]')
			.eq(0)
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'font-size', '16px');
	});
});
