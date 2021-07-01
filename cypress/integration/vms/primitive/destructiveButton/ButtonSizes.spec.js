describe('Destructive Button Component', () => {
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
			'VMS Components/Primitive Components/Destructive Button',
			'ButtonSizes'
		);
	});

	it('Destructive Button size small', () => {
		cy.get('[data-cy=DestructiveButton]:eq(0)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '120px')
			.and('have.css', 'height', '24px');

		cy.get('[data-cy=DestructiveButton]:eq(1)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '120px')
			.and('have.css', 'height', '24px');

		cy.get('[data-cy=DestructiveButton]:eq(1) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});

	it('Destructive Button size medium', () => {
		cy.get('[data-cy=DestructiveButton]:eq(2)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '180px')
			.and('have.css', 'height', '32px');

		cy.get('[data-cy=DestructiveButton]:eq(3)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '180px')
			.and('have.css', 'height', '32px');

		cy.get('[data-cy=DestructiveButton]:eq(3) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});

	it('Destructive Button size large', () => {
		cy.get('[data-cy=DestructiveButton]:eq(4)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '180px')
			.and('have.css', 'height', '40px');

		cy.get('[data-cy=DestructiveButton]:eq(5)')
			.should('have.css', 'background-color', 'rgb(176, 0, 0)')
			.and('have.css', 'width', '180px')
			.and('have.css', 'height', '40px');

		cy.get('[data-cy=DestructiveButton]:eq(5) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});
});
