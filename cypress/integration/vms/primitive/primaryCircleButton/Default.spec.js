describe('Primary Circle Button Component', () => {
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
			'VMS Components/Primitive Components/Primary Circle Button',
			'Default'
		);
	});

	it('Button has correct styling', () => {
		cy.get('[data-cy=PrimaryCircleButton]')
			.should('have.css', 'background-color', 'rgb(18, 76, 177)')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'border-color', 'rgb(18, 76, 177)')
			.and(
				'have.css',
				'filter',
				'drop-shadow(rgba(47, 54, 71, 0.4) 0px 2px 6px)'
			);

		cy.get('[data-cy=PrimaryCircleButton] [data-cy=Icon] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/onboarding.svg'
		);
	});
});
