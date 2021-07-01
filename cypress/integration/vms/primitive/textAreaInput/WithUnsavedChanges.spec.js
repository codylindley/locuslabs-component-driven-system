describe('Text Area Input Component', () => {
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
			'VMS Components/Primitive Components/Text Area Input',
			'WithUnsavedChanges'
		);
	});

	it('Unsaved changes indicator displays', () => {
		cy.get('[data-cy=UnsavedChangesIndicator]')
			.should('exist')
			.and('have.css', 'background-color', 'rgb(226, 97, 26)')
			.and('have.css', 'border-radius', '50%')
			.and('have.css', 'width', '6px')
			.and('have.css', 'height', '6px')
			.and('have.css', 'margin-left', '2px');
	});
});
