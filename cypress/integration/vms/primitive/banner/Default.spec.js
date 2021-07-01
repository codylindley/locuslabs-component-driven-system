describe('Banner Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Banner', 'Default');
	});

	it('Default', () => {
		cy.get('[data-cy=Banner] > div')
			.should('have.css', 'background-color', 'rgba(0, 102, 43, 0.05)')
			.and('have.css', 'color', 'rgb(0, 102, 43)')
			.and('have.css', 'width', '100px')
			.and('have.css', 'border-color', 'rgb(0, 102, 43)');
	});
});
