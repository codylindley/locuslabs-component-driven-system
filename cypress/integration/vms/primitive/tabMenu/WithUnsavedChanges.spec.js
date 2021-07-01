/// <reference types="cypress" />
describe('Tab Menu Component', () => {
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
			'VMS Components/Primitive Components/Tab Menu',
			'WithUnsavedChanges'
		);
	});

	it('WithUnsavedChanges', () => {
		cy.get('[data-cy=Tab]:eq(0) [data-cy=UnsavedChangesIndicator]').should(
			'not.exist'
		);

		cy.get('[data-cy=Tab]:eq(1) [data-cy=UnsavedChangesIndicator]').should(
			'exist'
		);
	});
});
