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
		cy.loadStory('VMS Components/Primitive Components/Checkbox', 'Checked');
	});

	it('Checked checkbox has correct styling', () => {
		cy.get('[data-cy=Checkbox] input')
			.should('exist') // is in dom
			.and('be.checked');

		cy.get('[data-cy=VisibleCheckbox]')
			.should('exist') // is in dom
			.and('have.css', 'border', '1px solid rgb(18, 76, 177)')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');

		cy.get('[data-cy=Checkbox] [data-cy=Icon]')
			.should('have.css', 'width', '16px')
			.and('have.css', 'height', '16px');

		cy.get('[data-cy=Checkbox] [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'width', '16px')
			.and('have.css', 'height', '16px')
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'tick.svg'
				);
			});

		cy.get('[data-cy=Checkbox] input').uncheck().should('not.be.checked');

		cy.get('[data-cy=Checkbox] [data-cy=Icon] svg').should('not.exist'); // is in dom

		cy.get('[data-cy=VisibleCheckbox]')
			.should('exist') // is in dom
			.and('have.css', 'border', '1px solid rgb(18, 76, 177)')
			.and('have.css', 'background-color', 'rgb(235, 235, 235)');

		cy.get('[data-cy=Checkbox] input').check().should('be.checked');

		cy.get('[data-cy=Checkbox] [data-cy=Icon] svg').should('exist'); // is in dom

		cy.get('[data-cy=VisibleCheckbox]')
			.should('exist') // is in dom
			.and('have.css', 'border', '1px solid rgb(18, 76, 177)')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');
	});

	it('Checkbox label is clickable', () => {
		cy.get('[data-cy=Checkbox] input').should('be.checked');
		cy.get('[data-cy=Checkbox]').click();
		cy.get('[data-cy=Checkbox] input').should('not.be.checked');
		cy.get('[data-cy=Checkbox]').click();
		cy.get('[data-cy=Checkbox] input').should('be.checked');
	});
});
