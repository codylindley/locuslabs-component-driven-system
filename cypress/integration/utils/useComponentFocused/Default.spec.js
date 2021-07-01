describe('useComponentFocused Util', () => {
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
		cy.loadStory('Utils/Use Component Focused', 'Default');
	});

	it('Component unfocuses after outside click was detected', () => {
		cy.get('input').click().should('have.value', 'Input is focused');
		cy.get('body').click();
		cy.get('input').should('have.value', 'Input is not focused');
	});
});
