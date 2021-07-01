/// <reference types="cypress" />
describe('Tab Menu Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Tab Menu', 'OnChange');
	});

	it('onChange', () => {
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Selected Index: 0');

		cy.get('[data-cy=Tab]').eq(1).click();
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Selected Index: 1');

		cy.get('[data-cy=Tab]').eq(2).click();
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Selected Index: 2');

		cy.get('[data-cy=Tab]').eq(3).click();
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Selected Index: 3');
	});
});
