describe('Text Input Component', () => {
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
			'VMS Components/Primitive Components/Text Input',
			'WithDefaultIcon'
		);
	});

	it('Input displays default icon', () => {
		cy.get('[data-cy=InputIcon]').should('exist');
		cy.get('[data-cy=InputIcon] svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'email.svg'
				);
			});
		cy.get('[data-cy=InputIcon]')
			.should('have.css', 'width', '24px')
			.and('have.css', 'color', 'rgb(153, 153, 153)');
	});
});
