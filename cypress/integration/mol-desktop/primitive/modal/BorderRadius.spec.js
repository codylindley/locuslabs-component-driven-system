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
			'BorderRadius'
		);
	});

	it('Story:Default', () => {
		const index = 0;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=Modal]')
			.eq(index)
			.should('have.css', 'borderRadius', '8px');
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});

	it('Story:1rem', () => {
		const index = 1;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=Modal]')
			.eq(index)
			.should('have.css', 'borderRadius', '16px');
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
	it('Story:0px', () => {
		const index = 2;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=Modal]')
			.eq(index)
			.should('have.css', 'borderRadius', '0px');
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
});
