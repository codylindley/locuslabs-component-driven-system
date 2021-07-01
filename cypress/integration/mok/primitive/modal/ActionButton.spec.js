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
		cy.loadStory('MOK Components/Primitive Components/Modal', 'ActionButton');
	});

	it('Story: With label', () => {
		const index = 0;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonLabel]')
			.should('have.text', 'Continue');
		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonIcon]')
			.should('not.exist');
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});

	it('Story: With label and icon to left (default)', () => {
		const index = 1;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonLabel]')
			.should('have.text', 'Continue');

		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});

	it('Story: With label and icon to right', () => {
		const index = 2;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonLabel]')
			.should('have.text', 'Continue');
		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonIcon]')
			.and('have.css', 'marginLeft', '8px')
			.and('have.css', 'marginRight', '0px');

		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
	it('Story: With long label', () => {
		const index = 3;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonLabel]')
			.should(
				'have.text',
				'When the text label goues beyond the minimum pixel padding left and has a lot of words asdasddsf asdasd d asdf asdf asasd asd a asdf asd asada'
			);
		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonIcon]')
			.should('not.exist');

		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
	it('Story: With long label and icon', () => {
		const index = 4;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=ModalButton]')
			.eq(index)
			.children('[data-cy=ModalButtonLabel]')
			.should(
				'have.text',
				'When the text label goues beyond the minimum pixel padding left and has a lot of words asdasddsf asdasd d asdf asdf asasd asd a asdf asd asada'
			);

		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
});
