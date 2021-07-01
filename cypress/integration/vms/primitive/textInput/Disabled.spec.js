describe('Text Input Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Text Input', 'Disabled');
	});

	it('Input has correct styling', () => {
		cy.get('[data-cy=InputWrapper]:eq(0)')
			.should('have.css', 'border-color', 'rgb(0, 0, 0)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');

		cy.get('[data-cy=InputWrapper]:eq(1)')
			.should('have.css', 'border-color', 'rgb(0, 0, 0)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');

		cy.get('[data-cy=InputLabel]:eq(0)').should('have.css', 'opacity', '0.5');
		cy.get('[data-cy=InputLabel]:eq(1)').should('have.css', 'opacity', '0.5');

		cy.get('[data-cy=TextInput]:eq(0) input').should('have.disabled');
		cy.get('[data-cy=TextInput]:eq(1) input').should('have.disabled');
	});

	it('Input gets focused when user clicks anywhere in the input wrapper', () => {
		cy.get('[data-cy=InputWrapper]:eq(0)').click();
		cy.get('[data-cy=TextInput]:eq(0) input').should('not.have.focus');
		cy.get('[data-cy=TextInput]:eq(0) input').should('have.disabled');
		cy.get('[data-cy=InputWrapper]:eq(1)').click();
		cy.get('[data-cy=TextInput]:eq(1) input').should('not.have.focus');
		cy.get('[data-cy=TextInput]:eq(1) input').should('have.disabled');
	});
});
