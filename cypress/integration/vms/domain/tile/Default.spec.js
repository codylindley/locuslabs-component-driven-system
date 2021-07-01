describe('Tile Component', () => {
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
		cy.loadStory('VMS Components/Domain Components/Tile', 'Default');
	});

	it('Default', () => {
		cy.get('[data-cy=TileContainer]')
			.should('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'border-color', 'rgb(235, 235, 235)');

		cy.get('[data-cy=TileRemoveButton]').should('be.visible');

		cy.get('[data-cy=TileBadge]').should('not.exist');

		cy.get('[data-cy=TooltipTrigger]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
	});
});
