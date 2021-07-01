describe('Text Area Input Component', () => {
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
			'VMS Components/Primitive Components/Text Area Input',
			'WithMaxCharacterCount'
		);
	});

	it('Input allows only for limited characters length', () => {
		cy.get('[data-cy=MaxCharacterCount]').contains('0/20');
		cy.get('[data-cy=TextAreaInput] textarea').type('S');
		cy.get('[data-cy=MaxCharacterCount]').contains('1/20');
		cy.get('[data-cy=TextAreaInput] textarea').type(
			'trawberry cheesecake recipe'
		);
		cy.get('[data-cy=TextAreaInput] textarea').should(
			'have.value',
			'Strawberry cheesecak'
		);
		cy.get('[data-cy=MaxCharacterCount]').contains('20/20');
		cy.get('[data-cy=TextAreaInput] textarea').type(
			'{selectall}Lime cheesecake recipe'
		);
		cy.get('[data-cy=TextAreaInput] textarea').should(
			'have.value',
			'Lime cheesecake reci'
		);
		cy.get('[data-cy=MaxCharacterCount]').contains('20/20');
		cy.get('[data-cy=TextAreaInput] textarea').type('{backspace}');
		cy.get('[data-cy=MaxCharacterCount]').contains('19/20');
		cy.get('[data-cy=DeleteButton]').click();
		cy.get('[data-cy=TextAreaInput] textarea').invoke('val').should('be.empty');
		cy.get('[data-cy=TextAreaInput] textarea').should('have.focus');
	});
});
