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
		cy.loadStory('VMS Components/Primitive Components/Select', 'Default');
	});

	it('Select menu does not display', () => {
		cy.get('[data-cy=SelectMenu]').should('not.exist');
	});

	it('Select menu list displays when control is focused and shows no results message', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectControl]').should(
			'have.css',
			'border-color',
			'rgb(34, 102, 221)'
		);
		cy.get('[data-cy=SelectControl] input').should('have.focus');
		cy.get('[data-cy=SelectMenu]').should('be.visible');
		cy.get('[data-cy=NoOptionsMessage]').should('be.visible');
		cy.get('[data-cy=Option]').should('not.exist');
	});

	it('Select menu hides when outside click is detected', () => {
		cy.get('[data-cy=SelectControl]').click({ force: true });
		cy.get('[data-cy=SelectMenu]').should('be.visible');
		cy.get('body').click(0, 0); // make sure input lost focus
		cy.get('[data-cy=SelectMenu]').should('not.exist');
	});

	it('Component has correct styling', () => {
		cy.get('[data-cy=SelectDropdownIndicator]').should('exist');
		cy.get('[data-cy=SelectDropdownIndicator] svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'triangle.down.svg'
				);
			});
		cy.get('[data-cy=SelectDropdownIndicator] [data-cy=Icon]')
			.should('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(153, 153, 153)');

		cy.get('[data-cy=SelectControl]')
			.should('have.css', 'border-color', 'rgb(235, 235, 235)')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)');

		cy.get('[data-cy=SelectControl]').click({ force: true });

		cy.get('[data-cy=SelectControl]').should(
			'have.css',
			'border-color',
			'rgb(34, 102, 221)'
		);

		cy.get('[data-cy=SelectMenu]')
			.should('have.css', 'position', 'absolute')
			.and('have.css', 'z-index', '1')
			.and('have.css', 'width', '200px')
			.and('have.css', 'overflow', 'hidden')
			.and('have.css', 'padding', '0px')
			.and('have.css', 'border', '0px none rgb(0, 0, 0)')
			.and('have.css', 'border-radius', '6px')
			.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.2) 0px 2px 12px 0px');
	});
});
