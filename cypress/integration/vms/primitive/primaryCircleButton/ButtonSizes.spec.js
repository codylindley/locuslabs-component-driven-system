describe('Primary Circle Button Component', () => {
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
			'VMS Components/Primitive Components/Primary Circle Button',
			'ButtonSizes'
		);
	});

	it('Button size small', () => {
		cy.get('[data-cy=PrimaryCircleButton]:eq(0)')
			.should('have.css', 'width', '24px')
			.and('have.css', 'height', '24px');
	});

	it('Button size medium', () => {
		cy.get('[data-cy=PrimaryCircleButton]:eq(1)')
			.should('have.css', 'width', '32px')
			.and('have.css', 'height', '32px');
	});

	it('Button size large', () => {
		cy.get('[data-cy=PrimaryCircleButton]:eq(2)')
			.should('have.css', 'width', '40px')
			.and('have.css', 'height', '40px');
	});
});
