describe('Floating Action Button Component', () => {
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
			'MOL Components/Mobile/Primitive Components/Floating Action Button',
			'Default'
		);
	});

	it('Floating Action Button is correct size and style', () => {
		cy.get('[data-cy="FloatingActionButtonDropShadow"]')
			.should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'border-radius', '9999px')
			.and('have.css', 'height', '40px')
			.and('have.css', 'width', '40px')
			.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px');
		cy.get('[data-cy="FloatingActionButton"]')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'border-radius', '9999px')
			.and('have.css', 'height', '40px')
			.and('have.css', 'width', '40px');
		cy.get('[data-cy="Icon"]')
			.should('have.css', 'height', '32px')
			.and('have.css', 'width', '32px')
			.and('have.css', 'color', 'rgb(102, 102, 102)');
	});

	it('Floating Action Button has icon was not found', () => {
		cy.get('[data-cy="Icon"] svg').should(
			'have.attr',
			'title',
			'Error Loading Icon'
		);
	});
});
