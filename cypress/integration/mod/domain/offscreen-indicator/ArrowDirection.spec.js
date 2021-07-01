describe('Offscreen Indicator Component - arrow directions', () => {
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
			'ArrowDirection'
		);
	});

	it('Up Lg Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].display.up')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '16px 16px 16px 10px');

		cy.get('[data-cy=OffscreenIndicator].display.up [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'10px'
		);

		cy.get('[data-cy=OffscreenIndicator].display.up [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.up.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].display.up [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Down Lg Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].display.down')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '16px 16px 16px 10px');

		cy.get('[data-cy=OffscreenIndicator].display.down [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'10px'
		);

		cy.get('[data-cy=OffscreenIndicator].display.down [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.down.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].display.down [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Left Lg Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].display.left')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '16px 16px 16px 10px');

		cy.get('[data-cy=OffscreenIndicator].display.left [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'10px'
		);

		cy.get('[data-cy=OffscreenIndicator].display.left [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.left.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].display.left [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Right Lg Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].display.right')
			.and('have.css', 'flex-direction', 'row-reverse')
			.and('have.css', 'padding', '16px 10px 16px 16px');

		cy.get('[data-cy=OffscreenIndicator].display.right [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'0px'
		);

		cy.get('[data-cy=OffscreenIndicator].display.right [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.right.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].display.right [data-cy=Text]').and(
			'have.css',
			'margin-right',
			'10px'
		);
	});

	it('Up Sm Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].editor.up')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '8px 8px 8px 5px');

		cy.get('[data-cy=OffscreenIndicator].editor.up [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'5px'
		);

		cy.get('[data-cy=OffscreenIndicator].editor.up [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.up.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].editor.up [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Down Sm Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].editor.down')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '8px 8px 8px 5px');

		cy.get('[data-cy=OffscreenIndicator].editor.down [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'5px'
		);

		cy.get('[data-cy=OffscreenIndicator].editor.down [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.down.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].editor.down [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Up Sm Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].editor.left')
			.and('have.css', 'flex-direction', 'row')
			.and('have.css', 'padding', '8px 8px 8px 5px');

		cy.get('[data-cy=OffscreenIndicator].editor.left [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'5px'
		);

		cy.get('[data-cy=OffscreenIndicator].editor.left [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.left.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].editor.left [data-cy=Text]').and(
			'have.css',
			'margin',
			'0px'
		);
	});

	it('Right Sm Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator].editor.right')
			.and('have.css', 'flex-direction', 'row-reverse')
			.and('have.css', 'padding', '8px 5px 8px 8px');

		cy.get('[data-cy=OffscreenIndicator].editor.right [data-cy=Icon]').should(
			'have.css',
			'margin-right',
			'0px'
		);

		cy.get('[data-cy=OffscreenIndicator].editor.right [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/lg.triangle.right.svg'
			);

		cy.get('[data-cy=OffscreenIndicator].editor.right [data-cy=Text]').and(
			'have.css',
			'margin-right',
			'5px'
		);
	});
});
