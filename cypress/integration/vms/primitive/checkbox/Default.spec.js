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
		cy.loadStory('VMS Components/Primitive Components/Checkbox', 'Default');
	});

	it('Checkbox has correct styling', () => {
		cy.get('[data-cy=CheckboxWrapper]')
			.should('exist') // is in dom
			.and('have.css', 'display', 'grid')
			.and('have.css', 'grid-gap', '12px 12px')
			.and('have.css', 'align-items', 'center');

		cy.get('[data-cy=CheckboxLabel]')
			.should('exist') // is in dom
			.and('have.css', 'font-size', '14px')
			.and('have.css', 'font-weight', '400')
			.and('have.css', 'line-height', '20px')
			.and('have.css', 'color', 'rgb(51, 51, 51)');

		cy.get('[data-cy=Checkbox] input')
			.should('exist') // is in dom
			.and('have.css', 'opacity', '0')
			.and('have.css', 'width', '16px')
			.and('have.css', 'height', '16px')
			.and('have.css', 'z-index', '1')
			.and('have.css', 'cursor', 'pointer');

		cy.get('[data-cy=VisibleCheckbox]')
			.should('exist') // is in dom
			.and('have.css', 'width', '16px')
			.and('have.css', 'height', '16px')
			.and('have.css', 'border-radius', '4px')
			.and('have.css', 'border', '1px solid rgb(235, 235, 235)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');

		cy.get('[data-cy=Checkbox] input').trigger('mouseover');
		cy.get('[data-cy=VisibleCheckbox]')
			.should('exist') // is in dom
			.and('have.css', 'width', '16px')
			.and('have.css', 'height', '16px')
			.and('have.css', 'border-radius', '4px')
			.and('have.css', 'border', '1px solid rgb(18, 76, 177)')
			.and('have.css', 'background-color', 'rgb(235, 235, 235)');
	});
});
