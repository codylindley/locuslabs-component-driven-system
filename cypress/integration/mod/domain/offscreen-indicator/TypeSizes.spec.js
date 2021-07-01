describe('Offscreen Indicator Component - sm and lg', () => {
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
			'MOD Components/Domain Components/Offscreen Indicator',
			'Types'
		);
	});

	it('Small Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].editor')
			.should('have.css', 'max-width', '147px')
			.and('have.css', 'height', '32px')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'border-radius', '4px')
			.and('have.css', 'padding', '8px 8px 8px 5px');

		cy.get('[data-cy=OffscreenIndicator].editor [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '16px')
			.and('have.css', 'width', '16px')
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.left.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].editor [data-cy=Text]')
			.should('have.css', 'font-size', '11px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'margin', '0px');
	});

	it('Large Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].display')
			.should('have.css', 'max-width', '293px')
			.and('have.css', 'height', '65px')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'border-radius', '8px')
			.and('have.css', 'padding', '16px 16px 16px 10px');

		cy.get('[data-cy=OffscreenIndicator].display [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px')
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.left.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].display [data-cy=Text]')
			.should('have.css', 'font-size', '22px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'margin', '0px');
	});
});
