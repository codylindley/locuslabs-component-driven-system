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
		cy.loadStory('VMS Components/Primitive Components/Select', 'Single');
	});

	it('Select menu does not display', () => {
		cy.get('[data-cy=SelectMenu]').should('not.exist');
	});

	it('Select menu list displays when control is focused and shows options list', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=NoOptionsMessage]').should('not.exist');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').should('exist');
	});

	it('Component has correct styling', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });

		cy.get('[data-cy=MenuList]')
			.should('have.css', 'width', '200px')
			.and('have.css', 'max-height', '290px')
			.and('have.css', 'overflow', 'auto')
			.and('have.css', 'padding', '4px 0px');

		cy.get('[data-cy=Option]')
			.eq(1)
			.should('have.css', 'padding', '6px 12px')
			.and('have.css', 'color', 'rgb(102, 102, 102)');
	});

	it('Only one option can be selected', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectSingleValue]').should('not.exist');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').should('exist');

		// check if option can be selected
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MenuList]').should('not.exist'); // ensure list doesn't display after option was selected
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella');
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'padding', '6px 12px')
			.and('have.css', 'color', 'rgb(51, 51, 51)');
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella'); // ensure selection wasn't cleared

		// check if selection can be changed
		cy.get('[data-cy=Option]').eq(1).click({ force: true });
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'parmesan');
		cy.get('[data-cy=SelectSingleValue]').should('not.contain', 'mozarella');
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'color', 'rgb(102, 102, 102)');
		cy.get('[data-cy=Option]')
			.eq(1)
			.should('have.css', 'color', 'rgb(51, 51, 51)');
	});

	it('Clicking selected option collapses dropdown', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=MenuList]').should('be.visible');
		// check if option can be selected
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MenuList]').should('not.exist'); // ensure list doesn't display after option was selected
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella');
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('have.css', 'pointer-events', 'auto'); // ensure already selected item can be clicked
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MenuList]').should('not.exist');
		cy.get('[data-cy=SelectSingleValue]').should('contain', 'mozarella'); // ensure selection wasn't cleared
	});
});
