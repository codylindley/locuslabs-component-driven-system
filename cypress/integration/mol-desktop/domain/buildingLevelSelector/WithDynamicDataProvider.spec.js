describe('Building Level Selector Component', () => {
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
			'MOL Components/Desktop/Domain Components/Building Level Selector',
			'WithDynamicDataProvider'
		);
	});

	it('Selecting a building causes Building Level Selector to expand', () => {
		cy.get('[data-cy=ExternalBuildingLevelSelectorTrigger]').click();
		cy.get('[data-cy=BuildingsListView]').should('be.visible');
		cy.get(
			'[data-cy=BuildingsListView] [data-cy=BuildingAccordion]:nth-child(2) [data-cy=LevelsList]'
		).should('be.visible');
		cy.get(
			'[data-cy=BuildingAccordion]:nth-child(2) [data-cy=BuildingRow]'
		).should('have.css', 'background-color', 'rgb(51, 51, 51)');
		cy.get('[data-cy=LevelsList] [data-cy=LevelRow]:first div').should(
			'have.css',
			'background-color',
			'rgba(34, 102, 221, 0.05)'
		);
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:first').should(
			'have.text',
			'Building 2'
		);
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:nth-child(2)').should(
			'have.text',
			'Level1'
		);
	});

	it('De-selecting a building causes Building Level Selector to collapse', () => {
		cy.get('[data-cy=ExternalBuildingLevelSelectorTrigger]').click();
		cy.get('[data-cy=BuildingsListView]').should('be.visible');
		cy.get('[data-cy=ExternalBuildingLevelSelectorTrigger]').click();
		cy.get('[data-cy=BuildingsListView]').should('not.be.exist');
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:first').should(
			'have.text',
			'Select a Building...'
		);
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:nth-child(2)').should(
			'have.text',
			'...'
		);
	});
});
