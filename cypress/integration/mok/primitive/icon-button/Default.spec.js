describe('Icon Button Component', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Icon Button', 'Default');
	});

	it('Icon Button has correct styling', () => {
		cy.get('[data-cy=IconButton]')
			.should('exist')
			.and('have.css', 'height', '60px')
			.and('have.css', 'width', '60px');

		cy.get('[data-cy=IconButton] button')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'padding', '10px');

		cy.get('[data-cy=IconButton] button>div')
			.should('have.css', 'height', '40px')
			.and('have.css', 'width', '40px');
	});
});
