describe('Offscreen Indicator Component - With color change', () => {
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
			'WithColorChange'
		);
	});

	it('Offscreen Indicator component has correct styling', () => {
		cy.get('[data-cy=OffscreenIndicator]').should(
			'have.css',
			'background-color',
			'rgb(0, 139, 139)'
		);

		cy.get('[data-cy=OffscreenIndicator] [data-cy=Icon]').should(
			'have.css',
			'color',
			'rgb(255, 192, 203)'
		);

		cy.get('[data-cy=OffscreenIndicator] [data-cy=Text]').should(
			'have.css',
			'color',
			'rgb(255, 192, 203)'
		);
	});
});
