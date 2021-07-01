describe('Tooltip Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Tooltip', 'Delay');
	});

	it('Tooltip delays on mouseover correctly', () => {
		cy.get('[data-cy=TooltipTrigger]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]', { timeout: 0 }).should(
			'have.css',
			'opacity',
			'0'
		);
		cy.get('[data-cy=Tooltip]').should('have.css', 'opacity', '1');
		cy.get('[data-cy=Tooltip]').should('have.css', 'transition-delay', '2s');
	});
	it('Tooltip delays on mouseout correctly', () => {
		cy.get('[data-cy=TooltipTrigger]').trigger('mouseover');
		cy.wait(3000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=TooltipTrigger]').trigger('mouseout');
		cy.get('[data-cy=Tooltip]').should('have.css', 'opacity', '1');
		cy.wait(3000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]').should('have.css', 'opacity', '0');
	});
});
