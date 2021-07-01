/// <reference types="cypress" />
describe('Modal Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Modal', 'Labels');
	});

	it('Story: Labels', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[data-cy=OpenModalButton]').click();

		cy.get('[data-cy=ModalPrimaryLabel]')
			.should('have.css', 'color', 'rgb(51, 51, 51)')
			.and('have.css', 'fontSize', '16px')
			.and('have.css', 'fontWeight', '700');

		cy.get('[data-cy=ModalSecondaryLabel]')
			.should('have.css', 'color', 'rgb(102, 102, 102)')
			.and('have.css', 'fontSize', '14px')
			.and('have.css', 'fontWeight', '500');
	});
});
