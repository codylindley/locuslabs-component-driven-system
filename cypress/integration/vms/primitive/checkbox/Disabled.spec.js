describe('Checkbox Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Checkbox', 'Disabled');
	});

	it('Disabled checkbox has correct styling', () => {
		cy.get('[data-cy=Checkbox]:eq(0) input')
			.should('exist') // is in dom
			.should('be.disabled')
			.and('be.checked');

		cy.get('[data-cy=VisibleCheckbox]:eq(0)')
			.should('exist') // is in dom
			.and('have.css', 'border', '1px solid rgb(235, 235, 235)')
			.and('have.css', 'background-color', 'rgb(235, 235, 235)');

		cy.get('[data-cy=CheckboxLabel]:eq(0)').should(
			'have.css',
			'color',
			'rgb(51, 51, 51)'
		);

		cy.get('[data-cy=Checkbox]:eq(1) input')
			.should('exist') // is in dom
			.should('be.disabled')
			.and('not.be.checked');

		cy.get('[data-cy=VisibleCheckbox]:eq(1)')
			.should('exist') // is in dom
			.and('have.css', 'border', '1px solid rgb(235, 235, 235)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');

		cy.get('[data-cy=CheckboxLabel]:eq(1)').should(
			'have.css',
			'color',
			'rgb(102, 102, 102)'
		);
	});
});
