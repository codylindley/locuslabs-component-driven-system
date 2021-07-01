describe('Header Component - Lg', () => {
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
		cy.loadStory('MOD Components/Domain Components/Header', 'Display');
	});

	it('Header component has correct styling', () => {
		cy.get('[data-cy=Header]')
			.eq(0)
			.should('have.css', 'justify-content', 'space-between')
			.and('have.css', 'background-color', 'rgb(34, 102, 221)')
			.and('have.css', 'padding', '24px 28px')
			.and('have.css', 'width', '1080px');

		cy.get('[data-cy=Header]').each(($el) => {
			const height = $el[0].offsetHeight;
			expect(height).to.be.at.least(84);
			expect(height).to.be.lessThan(149);
		});
	});

	it('Header text has correct styling', () => {
		cy.get('[data-cy=Header] [data-cy=Text]')
			.eq(0)
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'font-size', '32px');
	});
});
