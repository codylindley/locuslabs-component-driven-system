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
			'Default'
		);
	});

	it('The Trigger displays default building and level info', () => {
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:first').should(
			'have.text',
			'Select a Building...'
		);
		cy.get('[data-cy=BuildingLevelSelectorTrigger] span:nth-child(2)').should(
			'have.text',
			'...'
		);
	});

	it('Trigger button has correct tooltip text', () => {
		cy.get('[data-cy=TriggerButton]').trigger('mouseover');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').contains('Show Buildings & Levels');
		cy.get('[data-cy=TriggerButton]').trigger('mouseout');
		cy.wait(2000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]').should('not.be.visible');
	});

	it('Trigger button has correct icon', () => {
		cy.get('[data-cy=TriggerButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/triangle.down.svg'
		);
	});

	it('Building Level Selector expands when Trigger button is clicked', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView]').should('be.visible');
	});

	it('Trigger tooltip disappears when Building Level Selector expands', () => {
		cy.get('[data-cy=TriggerButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView]').should('be.visible');
		cy.get('[data-cy=Tooltip]').should('not.be.visible');
	});

	it('Building Level Selector renders a list of building rows', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView] [data-cy=BuildingAccordion]')
			.its('length')
			.should('eq', 3);
	});

	it('Building Row tooltip displays', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get(
			'[data-cy=BuildingsListView] [data-cy=BuildingAccordion]:first'
		).trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').contains('Building 1');
	});

	it('Building Level Selector renders a list of levels of selected building', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView] [data-cy=BuildingRow]')
			.first()
			.click({ force: true });
		cy.get(
			'[data-cy=BuildingsListView] [data-cy=BuildingAccordion]:first [data-cy=LevelsList]'
		).should('be.visible');
		cy.get('[data-cy=BuildingsListView] [data-cy=BuildingRow]')
			.last()
			.click({ force: true });
		cy.get(
			'[data-cy=BuildingsListView] [data-cy=BuildingAccordion]:first [data-cy=LevelsList]'
		).should('not.to.exist');
		cy.get(
			'[data-cy=BuildingsListView] [data-cy=BuildingAccordion]:last [data-cy=LevelsList]'
		).should('be.visible');
	});
});
