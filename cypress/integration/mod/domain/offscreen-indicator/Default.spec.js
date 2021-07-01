describe('Offscreen Indicator Component', () => {
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
			'Default'
		);
	});

	it('Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator]')
			.should('have.css', 'max-width', '293px')
			.and('have.css', 'height', '65px')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'border-radius', '8px')
			.and('have.css', 'padding', '16px 16px 16px 10px');

		cy.get('[data-cy=OffscreenIndicator] [data-cy=Icon]').should(
			'have.css',
			'color',
			'rgb(255, 255, 255)'
		);

		cy.get('[data-cy=OffscreenIndicator] [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px')
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.left.svg'
			);

		cy.get('[data-cy=OffscreenIndicator] [data-cy=Text]')
			.contains('Add Text !!!')
			.should('have.css', 'font-size', '22px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'margin', '0px');
	});
});
