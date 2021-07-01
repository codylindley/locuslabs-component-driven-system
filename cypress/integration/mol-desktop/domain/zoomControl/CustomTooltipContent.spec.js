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
			'MOL Components/Desktop/Domain Components/Zoom Control',
			'CustomTooltipContent'
		);
	});

	it('Zoom in button has correct tooltip text', () => {
		cy.get('[data-cy=ZoomControl] [data-cy=Box]:first').trigger('mouseover');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]:first').should('be.visible').contains('test 1');
	});
	it('Zoom out button has correct tooltip text', () => {
		cy.get('[data-cy=ZoomControl] [data-cy=Box]:last').trigger('mouseover');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]:last').should('be.visible').contains('test 2');
	});
});
