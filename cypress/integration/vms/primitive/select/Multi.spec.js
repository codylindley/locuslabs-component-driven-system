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
		cy.loadStory('VMS Components/Primitive Components/Select', 'Multi');
	});

	it('Multiple options can be selected and/or removed', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
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

		// check if selection can be removed
		cy.get('[data-cy=MultiValue]:eq(0) [data-cy=MultiValueRemove]').click({
			force: true,
		});
		cy.get('[data-cy=MultiValue]').its('length').should('eq', 1);
		cy.get('[data-cy=MultiValue]').eq(0).should('not.contain', 'mozarella');
		cy.get('[data-cy=MultiValue]').eq(0).should('contain', 'parmesan');
	});

	it('Component has correct styling', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectControl]')
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'padding', '0px 8px');

		cy.get('[data-cy=Option]').eq(0).click({ force: true });

		cy.get('[data-cy=SelectControl]').should('have.css', 'padding', '1px 2px');

		cy.get('[data-cy=MultiValue]').eq(0).trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=MultiValue]').eq(0).trigger('mouseout');
		cy.get('[data-cy=Tooltip]').should('not.be.visible');

		cy.get('[data-cy=MultiValue]')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)')
			.and('have.css', 'padding', '4px 5px 4px 8px')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'border-radius', '6px');

		cy.get('[data-cy=MultiValueRemove] [data-cy=Icon]')
			.should('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'padding', '0px');

		cy.get('[data-cy=MultiValueRemove] svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'delete.text.svg'
				);
			});
	});
});
