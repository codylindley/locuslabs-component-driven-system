describe('Map Legend Component - 5 items', () => {
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
		cy.loadStory('MOD Components/Domain Components/Map Legend', 'Items 5');
	});

	it('Map Legend component has correct styling', () => {
		cy.get('[data-cy=MapLegend]')
			.should('have.css', 'align-items', 'center')
			.and('have.css', 'flex-direction', 'column');

		cy.get('[data-cy=MapLegend]:eq(0) [data-cy=MapLegendRow]')
			.its('length')
			.should('eq', 2);
		cy.get('[data-cy=MapLegendRow]')
			.eq(0)
			.should('have.css', 'margin-bottom', '32px');
		cy.get('[data-cy=MapLegendRow]')
			.eq(1)
			.should('have.css', 'margin-bottom', '0px');

		cy.get('[data-cy=MapLegend]:eq(0) [data-cy=MapLegendItem]')
			.its('length')
			.should('eq', 5);
		cy.get('[data-cy=MapLegendItem]')
			.eq(0)
			.should('have.css', 'margin-right', '32px');
		cy.get('[data-cy=MapLegendItem]')
			.eq(1)
			.should('have.css', 'margin-right', '32px');
		cy.get('[data-cy=MapLegendItem]')
			.eq(2)
			.should('have.css', 'margin-right', '0px');
		cy.get('[data-cy=MapLegendItem]')
			.eq(3)
			.should('have.css', 'margin-right', '32px');
		cy.get('[data-cy=MapLegendItem]')
			.eq(4)
			.should('have.css', 'margin-right', '0px');

		cy.get('[data-cy=MapLegendRow]:eq(0) [data-cy=MapLegendItem]').each(
			($el) => {
				const height = $el[0].offsetWidth;
				expect(height).to.be.most(304);
			}
		);

		cy.get('[data-cy=MapLegendRow]:eq(1) [data-cy=MapLegendItem]').each(
			($el) => {
				const height = $el[0].offsetWidth;
				expect(height).to.be.most(471);
			}
		);

		cy.get(
			'[data-cy=MapLegend]:eq(1) [data-cy=MapLegendRow]:eq(0) [data-cy=MapLegendItem]'
		).each(($el) => {
			const height = $el[0].offsetWidth;
			expect(height).to.be.most(304);
		});

		cy.get(
			'[data-cy=MapLegend]:eq(1) [data-cy=MapLegendRow]:eq(1) [data-cy=MapLegendItem]'
		).each(($el) => {
			const height = $el[0].offsetWidth;
			expect(height).to.be.most(471);
		});
	});
});
