describe('Offscreen Indicator Component - With Long Text', () => {
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
			'WithLongText'
		);
	});

	it('Offscreen Indicator does not overflow max size', () => {
		cy.get('[data-cy=OffscreenIndicator].display')
			.should('have.css', 'width', '293px')
			.and('have.css', 'height', '98px');
		cy.get('[data-cy=OffscreenIndicator].editor')
			.should('have.css', 'width', '147px')
			.and('have.css', 'height', '48px');
	});
});
