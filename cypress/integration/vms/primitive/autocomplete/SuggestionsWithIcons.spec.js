describe('Autocomplete Component', () => {
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
			'VMS Components/Primitive Components/Autocomplete',
			'SuggestionsWithIcons'
		);
	});

	it('Suggestions icons and badges display', () => {
		cy.get('[data-cy=TextInput] input').type('g');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=SuggestionsContainer] ul li').and(
			'have.css',
			'padding',
			'6px 8px'
		);

		cy.get('[data-cy=Suggestion]:eq(0) [data-cy=Badge]').should('exist');
		cy.get('[data-cy=Suggestion]:eq(2) [data-cy=Badge]').should('not.exist');
		cy.get('[data-cy=Suggestion]:eq(2) [data-cy=Icon]').should('exist');

		cy.get('[data-cy=Suggestion] [data-cy=Badge]')
			.should('have.css', 'height', '24px')
			.and('have.css', 'width', '24px');

		cy.get('[data-cy=Suggestion]:eq(2) [data-cy=Icon]')
			.should('have.css', 'height', '24px')
			.and('have.css', 'width', '24px');

		cy.get(
			'[data-cy=Suggestion]:eq(0) [data-cy=Badge] [data-cy=Box]:eq(0) svg path'
		)
			.should('exist') // is in dom
			.and('have.attr', 'stroke', '#FFFFFF')
			.and('have.attr', 'fill', 'orange');
		cy.get('[data-cy=Suggestion]:eq(0) [data-cy=Badge] [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', '#FFFFFF');

		cy.get('[data-cy=Suggestion]:eq(0) [data-cy=Badge] [data-cy=Icon] svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'gate.svg'
				);
			});

		cy.get('[data-cy=Suggestion]:eq(2) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'orange');

		cy.get('[data-cy=Suggestion]:eq(2) [data-cy=Icon] svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'gate.svg'
				);
			});
	});
});
