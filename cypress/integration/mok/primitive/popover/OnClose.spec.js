describe('Popover Component', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Popover', 'OnClose');
	});

	// TODO do mock fn to test callable.
	it('On Close', () => {
		cy.get('[data-cy=PopoverDisclosure]').should('exist');
		cy.get('[data-cy=PopoverDisclosure]').click();

		cy.get('[data-cy=Popover]').should('be.visible');

		cy.get('[data-cy=PopoverClose]').click();
		cy.get('#root > code').should('have.text', 'true');
		cy.get('[data-cy=Popover]').should('not.visible');
	});
});
