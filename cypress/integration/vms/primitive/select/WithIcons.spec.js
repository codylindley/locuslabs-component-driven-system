describe('Select Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Select', 'WithIcons');
	});

	it('Icons display', () => {
		cy.get('[data-cy=SelectControl] [data-cy=Icon]')
			.should('exist')
			.and('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(153, 153, 153)');

		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=Option] [data-cy=Icon]')
			.should('exist')
			.and('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(88, 193, 115)');

		cy.get('[data-cy=Option]').eq(0).click({ force: true });

		cy.get('[data-cy=SelectControl] [data-cy=Icon]')
			.should('exist')
			.and('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(88, 193, 115)');
	});
});
