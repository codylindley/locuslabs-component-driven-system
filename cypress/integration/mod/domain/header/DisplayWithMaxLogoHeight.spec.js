describe('Header Component - Lg With Max Logo Height', () => {
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
			'MOD Components/Domain Components/Header',
			'DisplayWithMaxLogoHeight'
		);
	});

	it('Header and Logo have correct sizes', () => {
		cy.get('[data-cy=Header] [data-cy=Logo]').each(($el) => {
			cy.wrap($el).should('be.visible').and('have.css', 'height', '100px');
			const width = $el[0].offsetWidth;
			expect(width).to.be.lessThan(301);
		});
		cy.get('[data-cy=Header]').each(($el) => {
			const height = $el[0].offsetHeight;
			expect(height).to.be.at.least(83);
			expect(height).to.be.lessThan(149);
		});
	});
});
