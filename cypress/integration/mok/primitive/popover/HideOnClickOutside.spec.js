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
		cy.loadStory(
			'MOK Components/Primitive Components/Popover',
			'HideOnClickOutside'
		);
	});

	it('Should hide popover on click outside', () => {
		// First button (I do not hide on click outside)
		cy.get('[data-cy=PopoverDisclosure]:eq(0)').should('exist'); // is in dom
		cy.get('[data-cy=PopoverDisclosure]:eq(0)').click();
		cy.get('[data-cy=Popover]').should('be.visible');
		cy.get('body').click();
		cy.get('[data-cy=Popover]').should('not.visible');
	});

	it('Should not hide popover on click outside', () => {
		// Second button (I do not hide on click outside)
		cy.get('[data-cy=PopoverDisclosure]:eq(1)').should('exist'); // is in dom
		cy.get('[data-cy=PopoverDisclosure]:eq(1)').click();
		cy.get('[data-cy=Popover]').should('be.visible');
		cy.get('body').click();
		cy.get('[data-cy=Popover]').should('be.visible');
		cy.get('[data-cy=Popover] [data-cy=PopoverClose]:eq(1)').click();
		cy.get('[data-cy=Popover]').should('not.visible');
	});
});
