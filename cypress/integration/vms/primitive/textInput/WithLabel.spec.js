describe('Text Input Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Text Input', 'WithLabel');
	});

	it('Label is present', () => {
		cy.get('[data-cy=InputLabel]')
			.should('contain', 'Label')
			.and('have.css', 'font-size', '12px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '18px')
			.and('have.css', 'color', 'rgb(51, 51, 51)');
	});
});
