/// <reference types="cypress" />

describe('Radio Button Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Radio', 'Disabled');
	});

	it('Disabled', () => {
		cy.get('[data-cy=RadioButton]')
			.eq(0)
			.should('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'border-color', 'rgb(235, 235, 235)')
			.children('[data-cy=RadioEllipse]')
			.should('not.exist');
		cy.get('[data-cy=RadioButton]')
			.eq(1)
			.should('have.css', 'background-color', 'rgb(235, 235, 235)')
			.and('have.css', 'border-color', 'rgb(235, 235, 235)')
			.children('[data-cy=RadioEllipse]')
			.should('exist');
	});
});
