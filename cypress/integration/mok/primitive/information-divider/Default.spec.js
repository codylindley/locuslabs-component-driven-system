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
			'Default'
		);
	});

	it('Default', () => {
		cy.get('[data-cy=InformationDivider] > [data-cy=Box]')
			.should('exist')
			.and('have.text', 'Default')
			.and('have.css', 'height', '32px')
			.and('have.css', 'background-color', 'rgba(34, 102, 221, 0.05)');

		cy.get('[data-cy=InformationDivider] [data-cy=Text]')
			.should('exist')
			.and('have.css', 'font-size', '14px');
	});
});
