describe('Logo Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Logo',
			'WithAlignment'
		);
	});

	it('Logo image alignment can be changed', () => {
		cy.get('[data-cy=Logo]')
			.eq(0)
			.should('have.css', 'justify-content', 'center');
		cy.get('[data-cy=Logo]')
			.eq(1)
			.should('have.css', 'justify-content', 'flex-start');
		cy.get('[data-cy=Logo]')
			.eq(2)
			.should('have.css', 'justify-content', 'flex-end');
	});
});
