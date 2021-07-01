describe('Footer Component', () => {
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
		cy.loadStory('MOD Components/Domain Components/Footer', 'PortraitMode');
	});

	it('PortraitMode has correct styling', () => {
		cy.get('[data-cy=Footer]:eq(0)')
			.and('have.css', 'height', '72px')
			.and('have.css', 'min-width', '1080px')
			.and('have.css', 'gridColumnGap', '40px')
			.and('have.css', 'padding', '0px 40px')
			.and('have.css', 'display', 'grid');
		cy.get('[data-cy=Footer]:eq(1)')
			.and('have.css', 'height', '72px')
			.and('have.css', 'min-width', '1080px')
			.and('have.css', 'gridColumnGap', '40px')
			.and('have.css', 'padding', '0px 40px')
			.and('have.css', 'display', 'grid');

		cy.get('[data-cy=Footer]:eq(2)')
			.and('have.css', 'height', '72px')
			.and('have.css', 'min-width', '1080px')
			.and('have.css', 'gridColumnGap', '40px')
			.and('have.css', 'padding', '0px 40px')
			.and('have.css', 'display', 'grid');
		cy.get('[data-cy=Footer]:eq(3)')
			.and('have.css', 'height', '72px')
			.and('have.css', 'min-width', '1080px')
			.and('have.css', 'gridColumnGap', '40px')
			.and('have.css', 'padding', '0px 40px')
			.and('have.css', 'display', 'grid')
			.and('have.css', 'grid-template-columns', '1000px');
	});
});
