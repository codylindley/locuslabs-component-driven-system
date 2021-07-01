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
			'WithPredefinedValue'
		);
	});

	it('WithPredefinedValue', () => {
		cy.get('[data-cy=SelectControl]:eq(0)').click({ force: true });
		cy.get('[data-cy=SelectSingleValue]').should('not.exist');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').should('exist');

		// check if option can be selected
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MenuList]').should('not.exist'); // ensure list doesn't display after option was selected
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella');
		cy.get('[data-cy=SelectControl]:eq(0)').click({ force: true });
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'padding', '6px 12px')
			.and('have.css', 'color', 'rgb(51, 51, 51)');
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'pointer-events', 'auto'); // ensure already selected item can be clicked

		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella'); // ensure selection wasn't cleared

		cy.get('[aria-label="Reset single"]').click(); // reset value

		cy.get('[data-cy=SelectSingleValue]').should('not.exist');
	});

	it('Reset multi value', () => {
		cy.get('[data-cy=SelectControl]:eq(1)').click({ force: true });
		cy.get('[data-cy=SelectSingleValue]').should('not.exist');
		cy.get('[data-cy=MultiValue]').should('not.exist');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').should('exist');

		// check if option can be selected
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MenuList]').should('exist'); // ensure list displays after option was selected
		cy.get('[data-cy=MultiValue]').should('contain', 'mozarella');
		cy.get('[data-cy=MultiValueRemove]').should('exist');
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'padding', '6px 12px')
			.and('have.css', 'color', 'rgb(51, 51, 51)');
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'pointer-events', 'none'); // ensure already selected item can't be clicked
		cy.get('[data-cy=MultiValue]').should('contain', 'mozarella'); // ensure selection wasn't cleared

		// check if new option can be selected
		cy.get('[data-cy=Option]').eq(1).click({ force: true });
		cy.get('[data-cy=MultiValue]').eq(1).should('contain', 'parmesan');
		cy.get('[data-cy=MultiValue]').eq(0).should('contain', 'mozarella');
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 2);

		cy.get('[aria-label="Reset multi"]').click(); // Reset value

		cy.get('[data-cy=SelectSingleValue]').should('not.exist');
	});
});
