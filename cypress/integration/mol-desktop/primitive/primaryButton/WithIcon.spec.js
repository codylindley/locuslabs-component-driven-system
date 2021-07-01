describe('Primary Button Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Primary Button',
			'WithIcon'
		);
	});

	it('Primary Button is correct size and color', () => {
		cy.get('[data-cy=PrimaryButton]')
			.should('have.css', 'background-color', 'rgb(18, 76, 177)')
			.and('have.css', 'width', '351px')
			.and('have.css', 'height', '48px');
	});

	it('Primary Button correct Icon (i.e. loads icon at specific url)', () => {
		cy.get('[data-cy=PrimaryButton]:eq(0) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});
});
