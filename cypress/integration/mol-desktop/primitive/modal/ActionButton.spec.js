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
			'ActionButton'
		);
	});

	it('Story: With label', () => {
		const index = 0;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=PrimaryButton]')
			.eq(index)
			.children('[data-cy=Text]')
			.should('have.text', 'Continue');
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});

	it('Story: With long label', () => {
		const index = 1;
		cy.get('[data-cy=Modal]').eq(index).should('have.css', 'display', 'none');

		cy.get('[data-cy=OpenModalButton]').eq(index).click();

		cy.get('[data-cy=PrimaryButton]')
			.eq(index)
			.children('[data-cy=Text]')
			.should(
				'have.text',
				'When the text label goues beyond the minimum pixel padding left and has a lot of words asdasddsf asdasd d asdf asdf asasd asd a asdf asd asada'
			);
		cy.get('[data-cy=ModalCloseIcon]').eq(index).click();
	});
});
