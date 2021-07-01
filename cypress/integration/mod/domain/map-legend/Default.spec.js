describe('Map Legend Component', () => {
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
		cy.loadStory('MOD Components/Domain Components/Map Legend', 'Default');
	});

	it('Has not items message', () => {
		cy.get('[data-cy=MapLegend] [data-cy=Text]').contains(
			'legend items missing!'
		);
	});

	it('Map Legend component has correct styling', () => {
		cy.get('[data-cy=MapLegend]')
			.should('have.css', 'align-items', 'center')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'border-radius', '8px')
			.and('have.css', 'padding', '32px')
			.and('have.css', 'width', '1039px');

		cy.get('[data-cy=MapLegend] [data-cy=Badge]').should(
			'have.css',
			'margin-right',
			'12px'
		);

		cy.get('[data-cy=MapLegendRow]').should('not.exist');
		cy.get('[data-cy=MapLegendColumn]').should('not.exist');

		cy.get('[data-cy=MapLegendItem]').should('have.css', 'margin-right', '0px');

		cy.get('[data-cy=MapLegend] [data-cy=Text]')
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'font-size', '22px')
			.and('have.css', 'font-weight', '500');
	});
});
