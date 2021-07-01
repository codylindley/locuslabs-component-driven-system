describe('Text Component', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Text', 'Weights');
	});

	it('Text fontSize Props', () => {
		cy.get('[data-cy=Text]:eq(0)').should('have.css', 'font-weight', '400');
		cy.get('[data-cy=Text]:eq(1)').should('have.css', 'font-weight', '500');
		cy.get('[data-cy=Text]:eq(2)').should('have.css', 'font-weight', '700');
	});
});
