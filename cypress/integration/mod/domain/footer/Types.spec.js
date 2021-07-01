describe('Footer Component', () => {
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
		cy.loadStory('MOD Components/Domain Components/Footer', 'Types');
	});

	it('Display Footer has correct css', () => {
		cy.get('[data-cy=Footer]:eq(0)')
			.and('have.css', 'height', '72px')
			.and('have.css', 'min-width', '1080px')
			.and('have.css', 'gridColumnGap', '40px')
			.and('have.css', 'padding', '0px 40px')
			.and('have.css', 'display', 'grid')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)');

		cy.get('[data-cy=Footer] [data-cy=Text]').and(
			'have.css',
			'color',
			'rgb(255, 255, 255)'
		);
		cy.get('[data-cy=Footer] [data-cy=Icon]:eq(0) svg').should(
			'have.css',
			'color',
			'rgb(255, 255, 255)'
		);
	});

	it('Editor Footer has correct css', () => {
		cy.get('[data-cy=Footer]:eq(1)')
			.and('have.css', 'height', '36px')
			.and('have.css', 'min-width', '540px')
			.and('have.css', 'gridColumnGap', '20px')
			.and('have.css', 'padding', '0px 20px')
			.and('have.css', 'display', 'grid')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)');
	});
});
