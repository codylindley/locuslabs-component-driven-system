/// <reference types="cypress" />
describe('Filter Switch Component', () => {
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
			'MOK Components/Primitive Components/Filter Switch',
			'ControlledComponent'
		);
	});

	it('ControlledComponent', () => {
		cy.get('[data-cy=FilterSwitchIndicator]').should('have.css', 'left', '0px');

		cy.get('[data-cy=FilterSwitchControl]').trigger('click');

		cy.get('[data-cy=FilterSwitchIndicator]').should(
			'have.css',
			'left',
			'36px'
		);

		cy.get('[data-cy=FilterSwitchControl]').trigger('click');

		cy.get('[data-cy=FilterSwitchIndicator]').should('have.css', 'left', '0px');

		cy.get('#set_right_label').trigger('click');

		cy.get('[data-cy=FilterSwitchIndicator]').should(
			'have.css',
			'left',
			'36px'
		);

		cy.get('#set_left_label').trigger('click');

		cy.get('[data-cy=FilterSwitchIndicator]').should('have.css', 'left', '0px');
	});
});
