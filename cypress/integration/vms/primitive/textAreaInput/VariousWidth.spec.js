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
			'VariousWidth'
		);
	});

	it('Input adjusts to box width', () => {
		cy.get('[data-cy=TextAreaInput].short').should(
			'have.css',
			'width',
			'200px'
		);
		cy.get('[data-cy=TextAreaInput].short [data-cy=TextAreaWrapper]').should(
			'have.css',
			'width',
			'200px'
		);
		cy.get('[data-cy=TextAreaInput].long').should('have.css', 'width', '500px');
		cy.get('[data-cy=TextAreaInput].long [data-cy=TextAreaWrapper]').should(
			'have.css',
			'width',
			'500px'
		);
	});

	it('Input with long text does not exceed box width', () => {
		cy.get('[data-cy=TextAreaInput].short:eq(0) textarea').type(
			'{selectall}{backspace}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
		);

		cy.get('[data-cy=TextAreaInput].short').should(
			'have.css',
			'width',
			'200px'
		);
		cy.get('[data-cy=TextAreaInput].short [data-cy=TextAreaWrapper]').should(
			'have.css',
			'width',
			'200px'
		);
		cy.get('[data-cy=TextAreaInput].long').should('have.css', 'width', '500px');
		cy.get('[data-cy=TextAreaInput].long [data-cy=TextAreaWrapper]').should(
			'have.css',
			'width',
			'500px'
		);
	});
});
