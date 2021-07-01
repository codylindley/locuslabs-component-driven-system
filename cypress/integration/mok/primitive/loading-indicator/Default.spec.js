describe('Loading Indicator Component', () => {
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
			'MOK Components/Primitive Components/Loading Indicator',
			'Default'
		);
	});

	it('Loading Indicator has correct styling and animation', () => {
		cy.get('[data-cy=LoadingIndicator]')
			.and('have.css', 'height', '80px')
			.and('have.css', 'width', '80px');

		cy.get('[data-cy=LoadingIndicator] div')
			.eq(0)
			.should(
				'have.css',
				'border-color',
				'rgb(34, 102, 221) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)'
			)
			.and('have.css', 'border-top-width', '8px')
			.and(
				'have.css',
				'animation',
				'1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.45s infinite normal none running spin'
			);
	});
});
