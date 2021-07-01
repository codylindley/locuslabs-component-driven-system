describe('Information Divider Component', () => {
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
			'MOK Components/Primitive Components/Information Divider',
			'Type'
		);
	});

	it('Type', () => {
		cy.get('[data-cy=InformationDivider] > [data-cy=Box]:eq(0)')
			.should('exist')
			.and('have.text', 'building name - results')
			.and('have.css', 'padding-left', '40px');

		cy.get('[data-cy=InformationDivider] > [data-cy=Box]:eq(1)')
			.should('exist')
			.and('have.text', 'other results')
			.and('have.css', 'padding-left', '40px');

		cy.get('[data-cy=InformationDivider] > [data-cy=Box]:eq(2)')
			.should('exist')
			.and('have.text', 'information')
			.and('have.css', 'padding-left', '66px')
			.and('have.css', 'width', '440px');
	});
});
