describe('Search Component', () => {
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
		cy.loadStory('MOL Components/Desktop/Domain Components/Search', 'WithLogo');
	});

	it('Logo displays if logo props are defined', () => {
		cy.get('[data-cy=Logo] img')
			.should('be.visible')
			.and(($img) => {
				// "naturalWidth" and "naturalHeight" are set when the image loads
				expect($img[0].naturalWidth).to.be.greaterThan(0);
			});
	});
});
