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
		cy.loadStory('VMS Components/Primitive Components/Banner', 'Type');
	});

	it('Type', () => {
		cy.get('[data-cy=Banner]:eq(0) > div')
			.should('have.css', 'background-color', 'rgba(0, 102, 43, 0.05)')
			.and('have.css', 'color', 'rgb(0, 102, 43)')
			.and('have.css', 'width', '100px')
			.and('have.text', 'Success')
			.and('have.css', 'border-color', 'rgb(0, 102, 43)');

		cy.get('[data-cy=Banner]:eq(1) > div')
			.should('have.css', 'background-color', 'rgba(157, 56, 0, 0.05)')
			.and('have.css', 'color', 'rgb(157, 56, 0)')
			.and('have.css', 'width', '100px')
			.and('have.text', 'Warning')
			.and('have.css', 'border-color', 'rgb(157, 56, 0)');

		cy.get('[data-cy=Banner]:eq(2) > div')
			.should('have.css', 'background-color', 'rgba(176, 0, 0, 0.05)')
			.and('have.css', 'color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '100px')
			.and('have.text', 'Error')
			.and('have.css', 'border-color', 'rgb(176, 0, 0)');
	});
});
