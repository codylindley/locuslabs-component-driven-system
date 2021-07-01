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
		cy.loadStory('MOD Components/Primitive Components/Pin', 'Sizes');
	});

	it('Editor Pin has correct styling', () => {
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '16px')
			.and('have.css', 'width', '16px');

		cy.get('[data-cy=Pin]:eq(1)')
			.should('exist') // is in dom
			.and('have.css', 'height', '28px')
			.and('have.css', 'width', '22px');

		cy.get('[data-cy=Pin]:eq(1) [data-cy=PinShape]')
			.should('exist') // is in dom
			.and('have.css', 'height', '28px')
			.and('have.css', 'width', '22px');

		cy.get('[data-cy=Pin]:eq(1) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', '#FFFFFF');

		cy.get('[data-cy=Pin]:eq(1) [data-cy=PinShape] path:eq(0)')
			.should('exist') // is in dom
			.and('have.attr', 'fill', '#231F20');

		cy.get('[data-cy=Pin]:eq(1) [data-cy=PinShape] path:eq(1)')
			.should('exist') // is in dom
			.and('have.attr', 'fill', '#FFFFFF')
			.and('have.attr', 'stroke', '#C7C5CC')
			.and('have.attr', 'stroke-width', '1');
	});
});
