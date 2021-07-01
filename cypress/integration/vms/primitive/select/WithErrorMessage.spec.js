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
		cy.loadStory(
			'VMS Components/Primitive Components/Select',
			'WithErrorMessage'
		);
	});

	it('Component with error state has correct styling', () => {
		cy.get('[data-cy=SelectControl]').should(
			'have.css',
			'border-color',
			'rgb(176, 0, 0)'
		);

		cy.get('[data-cy=InputLabel]')
			.should('exist')
			.and('have.css', 'color', 'rgb(176, 0, 0)');

		cy.get('[data-cy=ErrorMessage]')
			.should('exist')
			.and('have.css', 'color', 'rgb(176, 0, 0)');
	});
});
