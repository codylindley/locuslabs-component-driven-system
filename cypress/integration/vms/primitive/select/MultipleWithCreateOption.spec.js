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
			'MultipleWithCreateOption'
		);
	});

	it('User can add new option', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectInput]').should('exist');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').should('exist');
		cy.get('[data-cy=SelectInput]').type('mozar');
		cy.get('[data-cy=Option]').its('length').should('eq', 2);
		cy.get('[data-cy=Option]').eq(0).should('contain', "Create new 'mozar'");

		// check if option can be selected
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 1);
		cy.get('[data-cy=MultiValue]').should('contain', 'mozar');
		cy.get('[data-cy=MenuList]').should('be.visible');
		cy.get('[data-cy=Option]').eq(0).should('contain', 'mozar');

		cy.get('[data-cy=SelectInput]').type('test');
		cy.get('[data-cy=Option]').its('length').should('eq', 1);
		cy.get('[data-cy=Option]').eq(0).should('contain', "Create new 'test'");
		cy.get('[data-cy=Option]').eq(0).click({ force: true });
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 2);
		cy.get('[data-cy=MultiValue]').eq(1).should('contain', 'test');

		cy.get('[data-cy=MultiValue]:eq(0) [data-cy=MultiValueRemove]').click({
			force: true,
		});
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 1);
		cy.get('[data-cy=Option]').eq(1).click({ force: true });
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 2);
		cy.get('[data-cy=MultiValue]').eq(1).should('contain', 'mozar');
	});

	it('Option does not display as new when it already exists on the list', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectInput]').type('mozar');
		cy.get('[data-cy=Option]').its('length').should('eq', 2);
		cy.get('[data-cy=Option]').eq(0).should('contain', "Create new 'mozar'");

		cy.get('[data-cy=SelectInput]').type('ella');
		cy.get('[data-cy=Option]').its('length').should('eq', 1);
		cy.get('[data-cy=Option]').eq(0).should('not.contain', 'Create new');

		cy.get('[data-cy=SelectInput]').type(' di bufala');
		cy.get('[data-cy=Option]').its('length').should('eq', 1);
		cy.get('[data-cy=Option]')
			.eq(0)
			.should('contain', "Create new 'mozarella di bufala'");
	});
});
