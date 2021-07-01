describe('Walk Time Matrix Component - With Long Text, 4 items', () => {
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
			'With Long Text 4 Items'
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

		cy.get('@leftColumn').invoke('outerWidth').should('not.be.gt', 520);
		cy.get('@rightColumn').invoke('outerWidth').should('not.be.gt', 520);

		cy.get('@displayComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.invoke('outerWidth')
			.should('not.be.gt', 520);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.invoke('outerWidth')
			.should('not.be.gt', 263);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '44px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.invoke('outerWidth')
			.should('not.be.gt', 487);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '48px');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.invoke('outerWidth')
			.should('not.be.gt', 208);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'height', '44px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.invoke('outerWidth')
			.should('not.be.gt', 487);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'height', '44px');
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

		cy.get('@leftColumn').invoke('outerWidth').should('not.be.gt', 261);

		cy.get('@rightColumn').invoke('outerWidth').should('not.be.gt', 261);

		cy.get('@editorComponent')
			.find('[data-cy=WalkTimeColumnLabel]')
			.invoke('outerWidth')
			.should('not.be.gt', 261);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.invoke('outerWidth')
			.should('not.be.gt', 132);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '22px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.invoke('outerWidth')
			.should('not.be.gt', 244);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(0)
			.should('have.css', 'height', '24px');

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.invoke('outerWidth')
			.should('not.be.gt', 104);

		cy.get('@leftColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'height', '22px');

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.invoke('outerWidth')
			.should('not.be.gt', 244);

		cy.get('@rightColumn')
			.find('[data-cy=WalkTimeItemLabel]')
			.eq(1)
			.should('have.css', 'height', '22px');
	});
});
