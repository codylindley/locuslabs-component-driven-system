describe('Secondary Stacked Button Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Secondary Button',
			'StackedButtons'
		);
	});

	it('Secondary Stacked Button is correct width and button color', () => {
		cy.get('[data-cy=SecondaryButton]:eq(0)')
			.should('have.css', 'background-color', 'rgb(235, 235, 235)')
			.and('have.css', 'width', '109px');
	});

	it('Secondary Stacked Button has correct icon', () => {
		cy.get('[data-cy=SecondaryButton]:eq(0) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/menu.svg'
		);
	});

	it('Secondary Stacked Button has correct icon color (i.e. loads icon at specific url)', () => {
		cy.get('[data-cy=SecondaryButton]:eq(0) [data-cy=Icon]').should(
			'have.css',
			'color',
			'rgb(18, 76, 177)'
		);
	});

	it('Secondary Stacked Button has correct text color', () => {
		cy.get('[data-cy=SecondaryButton]:eq(0)').should(
			'have.css',
			'color',
			'rgb(18, 76, 177)'
		);
	});

	it('Secondary Stacked Stacked Wide Button has correct width', () => {
		cy.get('[data-cy=SecondaryButton]:eq(2)').should(
			'have.css',
			'width',
			'162px'
		);
	});
});
