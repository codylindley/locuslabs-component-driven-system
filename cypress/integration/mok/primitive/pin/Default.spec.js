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
		cy.loadStory('MOK Components/Primitive Components/Pin', 'Default');
	});

	it('Pin has correct styling', () => {
		cy.get('[data-cy=Pin] [data-cy=Box]:eq(1) svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'pin.selected.svg'
				);
			});

		cy.get('[data-cy=Pin] [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '42px')
			.and('have.css', 'width', '42px');

		cy.get('[data-cy=Pin] [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '56px')
			.and('have.css', 'width', '42px');

		cy.get('[data-cy=Pin] [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', '#18419C');

		cy.get('[data-cy=Pin] [data-cy=Box]:eq(0) svg path:eq(1) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', '#215FEB');

		cy.get('[data-cy=Pin] [data-cy=Box]:eq(0) svg path:eq(2) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', '#18419C');
	});
});
