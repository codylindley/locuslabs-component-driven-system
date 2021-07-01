describe('Text Area Input Component', () => {
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
			'VMS Components/Primitive Components/Text Area Input',
			'WithErrorMessage'
		);
	});

	it('Error state displays', () => {
		cy.get('[data-cy=TextAreaWrapper]').should(
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

		cy.get('[data-cy=DeleteButton] [data-cy=Icon]')
			.should('exist')
			.and('have.css', 'color', 'rgb(176, 0, 0)');

		cy.get('[data-cy=TextAreaInput] textarea')
			.eq(0)
			.type('{selectall}{backspace}');

		cy.get('[data-cy=TextAreaWrapper]')
			.eq(0)
			.should('have.css', 'border-color', 'rgb(176, 0, 0)');

		cy.get('body').click(0, 0); // make suretextarea lost focus

		// make sure error border color is visible on not focused emptytextarea
		cy.get('[data-cy=TextAreaWrapper]').should(
			'have.css',
			'border-color',
			'rgb(176, 0, 0)'
		);
	});
});
