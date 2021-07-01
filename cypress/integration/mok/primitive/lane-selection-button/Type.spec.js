describe('Lane Selection Button Component', () => {
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
			'MOK Components/Primitive Components/Lane Selection Button',
			'Type'
		);
	});

	it('Type', () => {
		cy.get('[data-cy=LaneSelectionButton]:eq(0)').should(
			'have.css',
			'height',
			'54px'
		);
		cy.get('[data-cy=LaneSelectionButton]:eq(1)').should(
			'have.css',
			'height',
			'54px'
		);
		cy.get('[data-cy=LaneSelectionButton]:eq(2)')
			.should('have.css', 'height', '64px')
			.and('have.css', 'width', '480px');
		cy.get('[data-cy=LaneSelectionButton]:eq(3)')
			.should('have.css', 'height', '64px')
			.and('have.css', 'width', '480px');
	});
});
