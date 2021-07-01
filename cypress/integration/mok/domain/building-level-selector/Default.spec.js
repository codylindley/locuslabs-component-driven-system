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
			'MOK Components/Domain Components/Building Level Selector',
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
		cy.get('[data-cy=BuildingLevelSelectorTrigger]')
			.should('have.css', 'height', '64px')
			.and('have.css', 'width', '300px');
		cy.get('[data-cy=BuildingLevelSelectorTrigger] [data-cy="Box"]:eq(1)')
			.should('have.css', 'padding', '0px 12px')
			.and('have.css', 'width', '244px');
	});

	it('Trigger button has correct icon', () => {
		cy.get('[data-cy=TriggerButton] svg')
			.should(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/triangle.up.svg'
			)
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px');
	});

	it('Building Level Selector expands when Trigger button is clicked', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView]').should('be.visible');
	});

	it('Building Level Selector renders a list of building rows', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingsListView] [data-cy=BuildingAccordion]')
			.its('length')
			.should('eq', 3);
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

	it('Building row should has css properties correctlly', () => {
		cy.get('[data-cy=TriggerButton]').click({ force: true });
		cy.get('[data-cy=BuildingRow]')
			.should('have.css', 'height', '68px')
			.and('have.css', 'width', '300px');

		cy.get('[data-cy=BuildingRow] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/triangle.right.svg'
		);

		cy.get('[data-cy=BuildingRow] span').should(
			'have.css',
			'margin',
			'0px 8px'
		);

		cy.get('[data-cy=BuildingRow]:eq(0)').click({ force: true });
		cy.get('[data-cy=BuildingRow]:eq(0)')
			.should('have.css', 'background-color', 'rgb(51, 51, 51)')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)');

		cy.get('[data-cy=BuildingRow]:eq(0) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/triangle.down.svg'
		);
	});
});
