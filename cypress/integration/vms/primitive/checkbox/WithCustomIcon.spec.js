describe('Checkbox Component', () => {
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
			'VMS Components/Primitive Components/Checkbox',
			'WithCustomIcon'
		);
	});

	it('Custom icon displays', () => {
		cy.get('[data-cy=Checkbox] input').check().should('be.checked');

		cy.get('[data-cy=Checkbox] [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'eat.svg'
				);
			});

		cy.get('[data-cy=Checkbox] input').uncheck().should('not.be.checked');

		cy.get('[data-cy=Checkbox] [data-cy=Icon] svg').should('not.exist'); // is in dom
	});
});
