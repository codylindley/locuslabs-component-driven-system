describe('Person Component', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Person', 'Label');
	});

	it('Label', () => {
		cy.get('[data-cy=Person]:eq(0)')
			.should('exist') // is in dom
			.and('have.css', 'height', '40px')
			.and('have.css', 'width', '16px');

		cy.get('[data-cy=Person]:eq(1)')
			.should('exist') // is in dom
			.and('have.css', 'height', '50px')
			.and('have.css', 'width', '20px');

		cy.get('[data-cy=Person]:eq(2)')
			.should('exist') // is in dom
			.and('have.css', 'height', '50px')
			.and('have.css', 'width', '20px');

		cy.get('[data-cy=Person]:eq(1) + span')
			.should('exist')
			.and('have.text', 'You are in Level 2');

		cy.get('[data-cy=Person]:eq(2) + span')
			.should('exist')
			.and('have.text', 'You are in Level 2in Terminal 1');
	});
});
