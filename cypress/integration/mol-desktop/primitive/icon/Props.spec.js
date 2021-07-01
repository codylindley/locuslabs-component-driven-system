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
		cy.loadStory('MOL Components/Desktop/Primitive Components/Icon', 'Props');
	});

	it('Icon Color Props', () => {
		cy.get('[data-cy=Icon]:eq(0) svg').should(
			'have.css',
			'color',
			'rgb(0, 0, 255)'
		);
		cy.get('[data-cy=Icon]:eq(1) svg').should(
			'have.css',
			'color',
			'rgb(255, 0, 0)'
		);
		cy.get('[data-cy=Icon]:eq(2) svg').should(
			'have.css',
			'color',
			'rgb(0, 128, 0)'
		);
	});

	it('Icon IconSize Props', () => {
		cy.get('[data-cy=Icon]:eq(0) svg').should('have.attr', 'width', '24px');
		cy.get('[data-cy=Icon]:eq(1) svg').should('have.css', 'width', '32px');
		cy.get('[data-cy=Icon]:eq(2) svg').should('have.css', 'width', '36px');
		cy.get('[data-cy=Icon]:eq(3) svg').should('have.css', 'width', '40px');
		cy.get('[data-cy=Icon]:eq(4) svg').should('have.css', 'width', '48px');
	});

	it('Icon Name Props (i.e. loads icon at url)', () => {
		cy.get('[data-cy=Icon]:eq(0) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});
});
