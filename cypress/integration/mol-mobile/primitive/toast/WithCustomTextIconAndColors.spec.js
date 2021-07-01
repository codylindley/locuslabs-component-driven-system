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
		cy.loadStory(
			'MOL Components/Mobile/Primitive Components/Toast',
			'WithCustomTextIconAndColors'
		);
	});

	it('Toast has custom text and colors', () => {
		cy.get('[data-cy=Toast]')
			.should('be.visible')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'background-color', 'rgb(34, 150, 83)')
			.contains('Link shared successfully');
	});

	it('Toast option displays correct icon', () => {
		cy.get('[data-cy="Toast"] svg:first')
			.should(
				'have.attr',
				'data-src',
				'https://content.locuslabs.com/ds-assets/icons/success.svg'
			)
			.and('have.attr', 'width', '32px')
			.and('have.css', 'color', 'rgb(255, 255, 255)');
	});
});
