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
		cy.loadStory('MOD Components/Primitive Components/Pin', 'WithCustomColors');
	});

	it('Pin has custom colors applied', () => {
		cy.get('[data-cy=Pin] [data-cy=Badge] [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'orange');

		cy.get('[data-cy=Pin] [data-cy=Badge] path:eq(0)')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'pink');

		cy.get('[data-cy=Pin] [data-cy=PinShape] path:eq(0)')
			.should('exist') // is in dom
			.and('have.attr', 'fill', '#231F20');

		cy.get('[data-cy=Pin] [data-cy=PinShape] path:eq(1)')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'white')
			.and('have.attr', 'stroke', 'orange');
	});
});
