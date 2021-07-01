describe('Banner', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Banner', 'Default');
	});

	it('Banner is visible and has default text and colors', () => {
		cy.get('[data-cy=BannerContainer]')
			.should('exist')
			.and('have.css', 'min-height', '80px')
			.and('have.css', 'max-height', '128px')
			.and('have.css', 'padding', '16px 40px')
			.and('have.css', 'background-color', 'rgb(0, 0, 0)');
	});

	it('Icon and Text into Banner has css default properties ', () => {
		cy.get('[data-cy=Icon]')
			.should('exist')
			.and('have.css', 'height', '48px')
			.and('have.css', 'width', '48px')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'margin-right', '8px');

		cy.get('[data-cy=Text]')
			.should('exist')
			.and('have.css', 'line-height', '48px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'text-align', 'left')
			.and('have.css', 'color', 'rgb(255, 255, 255)');
	});
});
