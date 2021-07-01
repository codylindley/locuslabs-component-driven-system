describe('Map Navigation Button Component', () => {
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
			'MOK Components/Primitive Components/Map Navigation Button',
			'WithText'
		);
	});

	it('Map Navigation Button is correct size', () => {
		cy.get('[data-cy=MapNavigationButton]')
			.should('have.css', 'height', '48px')
			.and('have.css', 'width', '48px');
		cy.get('[data-cy=MapNavigationButton] button')
			.should('have.css', 'background-color', 'rgb(51, 51, 51)')
			.and('have.css', 'opacity', '0.85');
	});

	it('Map Navigation Button has correct Text', () => {
		cy.get('[data-cy=MapNavigationButton] [data-cy=Text]')
			.should('exist')
			.contains('2D');
	});
});
