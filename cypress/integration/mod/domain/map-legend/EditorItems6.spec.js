describe('Map Legend Component - editor type, 6 items', () => {
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
			'MOD Components/Domain Components/Map Legend',
			'Editor Items 6'
		);
	});

	it('Map Legend editor type component has correct styling', () => {
		cy.get('[data-cy=MapLegend]')
			.should('have.css', 'align-items', 'center')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'border-radius', '4px')
			.and('have.css', 'padding', '16px')
			.and('have.css', 'width', '520px');

		cy.get('[data-cy=MapLegend] [data-cy=Badge]').should(
			'have.css',
			'margin-right',
			'6px'
		);

		cy.get('[data-cy=MapLegend] [data-cy=Text]')
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'font-size', '11px')
			.and('have.css', 'font-weight', '500');

		cy.get('[data-cy=MapLegend]:eq(0) [data-cy=MapLegendColumn]')
			.its('length')
			.should('eq', 3);

		cy.get('[data-cy=MapLegendItem]')
			.eq(0)
			.should('have.css', 'margin-bottom', '16px');
		cy.get('[data-cy=MapLegendItem]')
			.eq(1)
			.should('have.css', 'margin-bottom', '0px');

		cy.get('[data-cy=MapLegend]:eq(0) [data-cy=MapLegendItem]')
			.its('length')
			.should('eq', 6);

		cy.get('[data-cy=MapLegendColumn]')
			.eq(0)
			.should('have.css', 'margin-right', '16px');
		cy.get('[data-cy=MapLegendColumn]')
			.eq(1)
			.should('have.css', 'margin-right', '16px');
		cy.get('[data-cy=MapLegendColumn]')
			.eq(2)
			.should('have.css', 'margin-right', '0px');

		cy.get('[data-cy=MapLegendColumn]').each(($el) => {
			const height = $el[0].offsetWidth;
			expect(height).to.be.most(152);
		});

		cy.get('[data-cy=MapLegendItem]').each(($el) => {
			const height = $el[0].offsetWidth;
			expect(height).to.be.most(152);
		});
	});
});
