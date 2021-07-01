describe('Pin Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Pin', 'PinColor');
	});

	it('Pin custom colors are applied', () => {
		cy.get('[data-cy=Pin] [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'red');

		cy.get('[data-cy=Pin] [data-cy=Box]:eq(0) svg path:eq(1) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'white');

		cy.get('[data-cy=Pin] [data-cy=Box]:eq(0) svg path:eq(2) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'red');
	});
});
