describe('Logo Component', () => {
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
		cy.loadStory('MOL Components/Desktop/Primitive Components/Logo', 'Default');
	});

	it('Logo image does not display', () => {
		cy.get('[data-cy=Logo] img')
			.should('be.hidden')
			.and(($img) => {
				// "naturalWidth" and "naturalHeight" are set when the image loads
				expect($img[0].naturalWidth).to.be.equal(0);
			});
	});

	it('Logo component has correct styling', () => {
		cy.get('[data-cy=Logo] ')
			.should('have.css', 'justify-content', 'center')
			.and('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'padding', '20px 20px 0px')
			.and('have.css', 'height', '48px');
	});
});
