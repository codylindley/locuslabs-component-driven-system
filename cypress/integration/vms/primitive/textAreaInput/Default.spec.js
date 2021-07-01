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
			'Default'
		);
	});

	it('Input displays default placeholder', () => {
		cy.get('[data-cy=TextAreaInput] textarea')
			.invoke('attr', 'placeholder')
			.should('contain', 'Input text');
	});

	it('Label does not display', () => {
		cy.get('[data-cy=InputLabel]').should('not.exist');
	});

	it('Error message does not display', () => {
		cy.get('[data-cy=ErrorMessage]').should('not.exist');
	});

	it('Max character count does not display', () => {
		cy.get('[data-cy=MaxCharacterCount]').should('not.exist');
	});

	it('Unsaved changes indicator does not display', () => {
		cy.get('[data-cy=UnsavedChangesIndicator]').should('not.exist');
	});

	it('Input has correct styling', () => {
		cy.get('[data-cy=TextAreaWrapper]')
			.should('have.css', 'border-color', 'rgb(235, 235, 235)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');
	});

	it('Input gets focused when user clicks anywhere in thetextarea wrapper', () => {
		cy.get('[data-cy=TextAreaWrapper]').click();
		cy.get('[data-cy=TextAreaWrapper]').should(
			'have.css',
			'border-color',
			'rgb(34, 102, 221)'
		);
		cy.get('[data-cy=TextAreaInput] textarea').should('have.focus');
	});
});
