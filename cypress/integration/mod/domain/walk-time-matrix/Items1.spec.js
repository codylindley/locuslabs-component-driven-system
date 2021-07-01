describe('Walk Time Matrix Component - 1 item', () => {
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
			'MOD Components/Domain Components/Walk Time Matrix',
			'Items 1'
		);
	});

	// --------------- DISPLAY TESTS -----------------
	it('Display Walk Time Matrix component has correct styling', () => {
		cy.get('[data-cy=WalkTimeMatrix].display').as('displayComponent');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumn]')
			.as('rowsWrapper');

		cy.get('@displayComponent').and('have.css', 'width', '1039px');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.its('length')
			.should('eq', 1);

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'font-size', '26px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'text-align', 'center')
			.and('have.css', 'padding', '6px 16px')
			.and('have.css', 'border-right-style', 'none')
			.and('have.css', 'color', 'rgb(255, 255, 255)');

		cy.get('@rowsWrapper').its('length').should('eq', 1);

		cy.get('@rowsWrapper')
			.and('have.css', 'flex', '1 1 0px')
			.and('have.css', 'border-right-style', 'none');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 1);

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItem]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'flex-direction', 'column')
			.and('have.css', 'padding', '32px 16px')
			.and('have.css', 'border-bottom-style', 'none');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'max-width', '100%')
			.and('have.css', 'height', '48px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'align-self', 'center')
			.and('have.css', 'text-align', 'center')
			.and('have.css', 'margin-bottom', '8px')
			.and('have.css', 'margin-right', '0px');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(0)
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'font-size', '32px')
			.and('have.css', 'font-weight', '500');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'max-width', '100%')
			.and('have.css', 'height', '48px')
			.and('have.css', 'align-self', 'center')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'text-align', 'center');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(0)
			.should('have.css', 'font-size', '32px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'color', 'rgb(51, 51, 51)');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(1)
			.should('have.css', 'font-size', '32px')
			.and('have.css', 'font-weight', '400')
			.and('have.css', 'color', 'rgb(102, 102, 102)');
	});

	// --------------- EDITOR TESTS -----------------
	it('Editor Walk Time Matrix component has correct styling', () => {
		cy.get('[data-cy=WalkTimeMatrix].editor').as('editorComponent');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumn]')
			.as('rowsWrapper');

		cy.get('@editorComponent').and('have.css', 'width', '520px');

		cy.get('@rowsWrapper')
			.should('have.css', 'flex', '1 1 0px')
			.and('have.css', 'border-right-style', 'none');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.its('length')
			.should('eq', 1);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'font-size', '13px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'text-align', 'center')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'padding', '3px 8px')
			.and('have.css', 'border-right-style', 'none')
			.should('have.css', 'border-right-style', 'none');

		cy.get('@rowsWrapper').its('length').should('eq', 1);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 1);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeItem]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'flex-direction', 'column')
			.and('have.css', 'padding', '16px 8px')
			.and('have.css', 'border-bottom-style', 'none');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'max-width', '100%')
			.and('have.css', 'height', '24px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'text-align', 'center')
			.and('have.css', 'margin-bottom', '4px')
			.and('have.css', 'margin-right', '0px');

		cy.get('@rowsWrapper')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'text-align', 'center')
			.and('have.css', 'height', '24px')
			.and('have.css', 'max-width', '100%');

		cy.get('@rowsWrapper')
			.find('[data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(0)
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'font-weight', '500');

		cy.get('@rowsWrapper')
			.find('[data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(1)
			.should('have.css', 'color', 'rgb(102, 102, 102)')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'font-weight', '400');
	});
});
