describe('Floating Action Button Component', () => {
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
			'MOL Components/Mobile/Primitive Components/Floating Action Button',
			'WithRotatedIcon'
		);
	});

	it('Floating Action Button icon rotates', () => {
		cy.get('[data-cy="Icon"]').should(
			'have.css',
			'transform',
			'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'
		);
	});
});
