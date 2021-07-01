describe('Icon Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Icon', 'NarrowSizes');
	});

	it('NarrowSizes', () => {
		cy.get('[data-cy=Icon]:eq(0) svg')
			.should('have.attr', 'height', '16px')
			.and('have.attr', 'width', '16px')
			.and('have.attr', 'viewBox', '0 0 32 32');

		cy.get('[data-cy=Icon]:eq(1) svg')
			.should('have.attr', 'height', '16px')
			.and('have.attr', 'width', '12px')
			.and('have.attr', 'viewBox', '5 0 22 32');
		//
		cy.get('[data-cy=Icon]:eq(2) svg')
			.should('have.attr', 'height', '20px')
			.and('have.attr', 'width', '20px')
			.and('have.attr', 'viewBox', '0 0 32 32');

		cy.get('[data-cy=Icon]:eq(3) svg')
			.should('have.attr', 'height', '20px')
			.and('have.attr', 'width', '14px')
			.and('have.attr', 'viewBox', '5 0 22 32');
		//
		cy.get('[data-cy=Icon]:eq(4) svg')
			.should('have.attr', 'height', '24px')
			.and('have.attr', 'width', '24px')
			.and('have.attr', 'viewBox', '0 0 32 32');

		cy.get('[data-cy=Icon]:eq(5) svg')
			.should('have.attr', 'height', '24px')
			.and('have.attr', 'width', '16px')
			.and('have.attr', 'viewBox', '5 0 22 32');

		//
		cy.get('[data-cy=Icon]:eq(6) svg')
			.should('have.attr', 'height', '28px')
			.and('have.attr', 'width', '28px')
			.and('have.attr', 'viewBox', '0 0 32 32');

		cy.get('[data-cy=Icon]:eq(7) svg')
			.should('have.attr', 'height', '28px')
			.and('have.attr', 'width', '18px')
			.and('have.attr', 'viewBox', '5 0 22 32');

		//
		cy.get('[data-cy=Icon]:eq(8) svg')
			.should('have.attr', 'height', '32px')
			.and('have.attr', 'width', '32px')
			.and('have.attr', 'viewBox', '0 0 32 32');

		cy.get('[data-cy=Icon]:eq(9) svg')
			.should('have.attr', 'height', '32px')
			.and('have.attr', 'width', '20px')
			.and('have.attr', 'viewBox', '5 0 22 32');
	});
});
