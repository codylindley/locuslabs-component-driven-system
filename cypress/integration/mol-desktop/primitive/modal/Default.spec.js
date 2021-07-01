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
		cy.loadStory(
			'MOL Components/Desktop/Primitive Components/Modal',
			'Default'
		);
	});

	it('Default', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[data-cy=OpenModalButton]').click();

		cy.get('[data-cy=ModalBackdrop]')
			.should('have.css', 'backgroundColor', 'rgba(0, 0, 0, 0.45)')
			.and('have.css', 'position', 'fixed')
			.and('have.css', 'zIndex', '999');

		cy.get('[data-cy=ModalCloseIcon]')
			.should('have.css', 'position', 'absolute')
			.and('have.css', 'top', '14px')
			.and('have.css', 'right', '14px');

		cy.get('[data-cy=Modal]')
			.should('have.css', 'display', 'flex')
			.and('have.css', 'position', 'relative')
			.and('have.css', 'zIndex', '999')
			.and('have.css', 'boxShadow', 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px')
			.and('have.css', 'maxHeight', '90%');

		cy.get('[data-cy=Modal]').click(); // does not close when click inside
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'flex');

		cy.get('[data-cy=ModalCloseIcon]').click(); // closes when click in close icon
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
	});
});
