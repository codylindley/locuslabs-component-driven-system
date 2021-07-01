describe('Banner', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Banner', 'Icon');
	});

	it('WrapText', () => {
		cy.get('[data-cy=Icon]')
			.should('exist')
			.and('have.css', 'height', '48px')
			.and('have.css', 'width', '48px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.attr', 'name', 'coins')
			.and('have.css', 'margin-right', '8px');
	});
});
