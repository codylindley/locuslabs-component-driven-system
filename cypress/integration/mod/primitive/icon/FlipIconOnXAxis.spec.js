describe('Icon Component', () => {
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
		cy.loadStory('MOD Components/Primitive Components/Icon', 'FlipIconOnXAxis');
	});

	it('Icon flipOnXAxis Prop flip icons on X axis', () => {
		cy.get('[data-cy=Icon]:eq(0)').should(
			'have.css',
			'transform',
			'matrix(-1, 0, 0, 1, 0, 0)'
		);
		cy.get('[data-cy=Icon]:eq(1)').should(
			'have.css',
			'transform',
			'matrix(-1, 0, 0, 1, 0, 0)'
		);
	});
});
