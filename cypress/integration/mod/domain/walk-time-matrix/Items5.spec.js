describe('Walk Time Matrix Component - 5 items', () => {
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
			'Items 5'
		);
	});

	// --------------- DISPLAY TESTS -----------------
	it('Display Walk Time Matrix component has correct styling', () => {
		cy.get('[data-cy=WalkTimeMatrix].display').as('displayComponent');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumn]:eq(0)')
			.as('leftColumn');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumn]:eq(1)')
			.as('rightColumn');

		cy.get('@displayComponent').and('have.css', 'width', '1039px');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.its('length')
			.should('eq', 2);
		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.should('have.css', 'flex', '1 1 50%')
			.and('have.css', 'font-size', '22px')
			.and('have.css', 'text-align', 'left');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.eq(0)
			.and('have.css', 'border-right', '1px solid rgba(255, 255, 255, 0.1)');

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.eq(1)
			.and('have.css', 'border-right-style', 'none');

		cy.get('@leftColumn')
			.should('exist')
			.and('have.css', 'border-right', '1px solid rgba(51, 51, 51, 0.1)');

		cy.get('@rightColumn')
			.should('exist')
			.and('have.css', 'border-right-style', 'none');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 3);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 2);

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeItem]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'justify-content', 'space-between')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '6px 16px')
			.and('have.css', 'border-bottom', '1px solid rgba(51, 51, 51, 0.1)');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItem]')
			.eq(2)
			.should('have.css', 'border-bottom-style', 'none');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]')
			.eq(1)
			.should('have.css', 'border-bottom-style', 'none');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]:eq(0) [data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '44px')
			.and('have.css', 'width', '263px')
			.and('have.css', 'text-align', 'left')
			.and('have.css', 'margin-right', '16px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]:eq(0) [data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'height', '44px')
			.and('have.css', 'max-width', '208px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem] [data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(0)
			.and('have.css', 'font-size', '26px')
			.and('have.css', 'font-weight', '500');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem] [data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(1)
			.and('have.css', 'font-size', '26px')
			.and('have.css', 'font-weight', '400');
	});

	// --------------- EDITOR TESTS -----------------
	it('Editor Walk Time Matrix component has correct styling', () => {
		cy.get('[data-cy=WalkTimeMatrix].editor').as('editorComponent');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumn]:eq(0)')
			.as('leftColumn');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumn]:eq(1)')
			.as('rightColumn');

		cy.get('@editorComponent').and('have.css', 'width', '520px');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.its('length')
			.should('eq', 2);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.should('have.css', 'flex', '1 1 50%')
			.and('have.css', 'font-size', '13px');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.eq(0)
			.and('have.css', 'border-right', '1px solid rgba(255, 255, 255, 0.1)');

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.eq(1)
			.and('have.css', 'border-right-style', 'none');

		cy.get('@leftColumn')
			.should('exist')
			.and('have.css', 'border-right', '1px solid rgba(51, 51, 51, 0.1)');

		cy.get('@rightColumn')
			.should('exist')
			.and('have.css', 'border-right-style', 'none');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 3);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]')
			.its('length')
			.should('eq', 2);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeItem]')
			.should('have.css', 'flex', '1 1 auto')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'justify-content', 'space-between')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '3px 8px')
			.and('have.css', 'border-bottom', '1px solid rgba(51, 51, 51, 0.1)');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItem]')
			.eq(2)
			.should('have.css', 'border-bottom-style', 'none');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]')
			.eq(1)
			.should('have.css', 'border-bottom-style', 'none');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]:eq(0) [data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '22px')
			.and('have.css', 'width', '132px')
			.and('have.css', 'text-align', 'left')
			.and('have.css', 'margin-right', '8px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem]:eq(0) [data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'max-width', '104px')
			.and('have.css', 'height', '22px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem] [data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(0)
			.should('have.css', 'font-size', '13px')
			.and('have.css', 'font-weight', '500');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItem] [data-cy=WalkTimeItemLabel] [data-cy=Text]')
			.eq(1)
			.should('have.css', 'font-size', '13px')
			.and('have.css', 'font-weight', '400');
	});
});
