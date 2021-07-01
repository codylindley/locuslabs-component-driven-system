describe('Compass Component', () => {
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
			'MOL Components/Desktop/Domain Components/Compass',
			'CustomTooltipContent'
		);
	});

	it('Compass button has correct tooltip text', () => {
		cy.get('[data-cy=Compass] [data-cy=Icon]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible').contains('test 1');
	});
});
