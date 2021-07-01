describe('Toast Component', () => {
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
		cy.loadStory('MOL Components/Mobile/Primitive Components/Toast', 'Default');
	});

	it('Toast is visible and has default text and colors', () => {
		cy.get('[data-cy=Toast]')
			.should('be.visible')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'background-color', 'rgb(0, 0, 0)')
			.contains('This is a generic alert message');
	});

	it('Toast option displays icon', () => {
		cy.get('[data-cy="Toast"] svg:first')
			.should(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/info.svg'
			)
			.and('have.attr', 'width', '32px')
			.and('have.css', 'color', 'rgb(255, 255, 255)');
	});

	it('Toast hides after 4s', () => {
		cy.get('[data-cy=Toast]', { timeout: 6000 }).should('not.exist');
	});
});
