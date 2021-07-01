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
			'WithPreSelectedSuggestion'
		);
	});

	it('Input is populated with suggestion', () => {
		cy.get('[data-cy=TextInput] input').should('have.value', 'Starbucks');
	});

	it('Suggestions container does not display until input is focused', () => {
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
		cy.get('[data-cy=InputWrapper]').click({ force: true });
		cy.get('[data-cy=TextInput] input').should('have.focus');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=SuggestionsContainer]').contains('Starbucks');
	});
});
