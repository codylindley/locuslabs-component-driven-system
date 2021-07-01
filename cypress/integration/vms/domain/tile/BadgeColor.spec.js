describe('Tile Component', () => {
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
		cy.loadStory('VMS Components/Domain Components/Tile', 'BadgeColor');
	});

	it('BadgeColor', () => {
		cy.get('[data-cy=Badge]:eq(0) [data-cy=Box]:eq(0) svg path').should(
			'have.attr',
			'fill',
			'#58C173'
		);

		cy.get('[data-cy=Badge]:eq(1) [data-cy=Box]:eq(0) svg path').should(
			'have.attr',
			'fill',
			'red'
		);

		cy.get('[data-cy=Badge]:eq(2) [data-cy=Box]:eq(0) svg path').should(
			'have.attr',
			'fill',
			'#6AB3C1'
		);

		cy.get('[data-cy=Badge]:eq(3) [data-cy=Box]:eq(0) svg path').should(
			'have.attr',
			'fill',
			'rgb(150, 50, 200)'
		);
	});
});
