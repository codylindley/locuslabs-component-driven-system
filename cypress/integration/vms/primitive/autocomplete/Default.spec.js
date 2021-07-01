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
		cy.loadStory('VMS Components/Primitive Components/Autocomplete', 'Default');
	});

	it('Suggestions container does not display', () => {
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
	});

	it('Suggestions container does not display when input is empty and focused', () => {
		cy.get('[data-cy=InputWrapper]').click({ force: true });
		cy.get('[data-cy=InputWrapper]').should(
			'have.css',
			'border-color',
			'rgb(34, 102, 221)'
		);
		cy.get('[data-cy=TextInput] input').should('have.focus');
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
	});

	it('Suggestions container does display when input is not empty and focused', () => {
		cy.get('[data-cy=TextInput] input').type('Gate');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('body').click(0, 0); // make sure input lost focus
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
		cy.get('[data-cy=InputWrapper]').click({ force: true });
		cy.get('[data-cy=TextInput] input').should('have.focus');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
	});

	it('Suggestions have correct styling', () => {
		cy.get('[data-cy=TextInput] input').type('Gate');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=SuggestionsContainer]')
			.should('have.css', 'position', 'absolute')
			.and('have.css', 'z-index', '1')
			.and('have.css', 'max-height', '290px')
			.and('have.css', 'overflow', 'hidden')
			.and('have.css', 'top', '40px')
			.and('have.css', 'margin', '6px 0px 0px')
			.and('have.css', 'list-style-type', 'none')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'color', 'rgb(102, 102, 102)')
			.and('have.css', 'border-radius', '6px')
			.and('have.css', 'font-size', '12px')
			.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.2) 0px 2px 12px 0px');

		cy.get('[data-cy=SuggestionsContainer] ul')
			.should('have.css', 'margin', '0px')
			.and('have.css', 'padding', '6px 0px')
			.and('have.css', 'list-style-type', 'none')
			.and('have.css', 'height', '66px')
			.and('have.css', 'overflow-y', 'auto');

		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');

		cy.get('[data-cy=SuggestionsContainer] ul li')
			.and('have.css', 'padding', '6px 12px')
			.and('have.css', 'cursor', 'pointer');

		cy.get('[data-cy=SuggestionsContainer] ul li [data-cy=Suggestion] ')
			.should('have.css', 'display', 'flex')
			.and('have.css', 'align-items', 'center');

		cy.get('[data-cy=Suggestion] [data-cy=Icon]').should('not.exist');
	});

	it('Clicking suggestion collapses suggestions and populates input', () => {
		cy.get('[data-cy=TextInput] input').type('Gate');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=Suggestion]').eq(0).click({ force: true });
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
		cy.get('[data-cy=TextInput] input').should('have.value', 'Gate A12');
		cy.get('[data-cy=InputWrapper]').should(
			'have.css',
			'border-color',
			'rgb(235, 235, 235)'
		);
	});

	it('Clearing input hides suggestions', () => {
		cy.get('[data-cy=TextInput] input').type('S');
		cy.get('[data-cy=SuggestionsContainer]').should('be.visible');
		cy.get('[data-cy=TextInput] [data-cy=DeleteButton]').click({ force: true });
		cy.get('[data-cy=SuggestionsContainer]').should('not.be.visible');
		cy.get('[data-cy=TextInput] input').should('be.empty');
		cy.get('[data-cy=InputWrapper]').should(
			'have.css',
			'border-color',
			'rgb(34, 102, 221)'
		);
	});
});
