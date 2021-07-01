describe('Badge Component', () => {
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
			'MOD Components/Primitive Components/Badge',
			'CustomBadgeSizes'
		);
	});

	it('Story: Icon Name', () => {
		cy.get('[data-cy=Badge]:eq(0) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '156px')
			.and('have.css', 'width', '156px');
	});
});
