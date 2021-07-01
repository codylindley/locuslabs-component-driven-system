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
			'WithSelectedSuggestionHandler'
		);
	});

	it('Selected suggestion handler works', () => {
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
		cy.get('[data-cy=SelectedSuggestionInfo]').should(
			'have.text',
			'Selected suggestion: '
		);
		cy.get('[data-cy=TextInput] input').type('s');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=Suggestion]').eq(0).click({ force: true });
		cy.get('[data-cy=SelectedSuggestionInfo]').should(
			'have.text',
			'Selected suggestion: Shop'
		);
		cy.get('[data-cy=TextInput] input').should('have.value', 'Shop');
		cy.get('[data-cy=TextInput] [data-cy=DeleteButton]').click({ force: true });
		cy.get('[data-cy=TextInput] input').should('be.empty');
		cy.get('[data-cy=SelectedSuggestionInfo]').should(
			'have.text',
			'Selected suggestion: '
		);
	});
});
