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
			'Default'
		);
	});

	it('Default', () => {
		cy.get('[data-cy=FilterSwitchControl]')
			.should('have.css', 'position', 'relative')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.should('have.css', 'width', '84px')
			.should('have.css', 'height', '48px')
			.should('have.css', 'padding', '6px')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'border-radius', '24px');

		cy.get('[data-cy=FilterSwitchIndicator]')
			.should('have.css', 'position', 'relative')
			.should('have.css', 'left', '0px')
			.should('have.css', 'height', '36px')
			.should('have.css', 'width', '36px')
			.should('have.css', 'background-color', 'rgb(18, 76, 177)')
			.should('have.css', 'border-radius', '50%')
			.should('have.css', 'position', 'relative');

		cy.get('[data-cy=FilterSwitchLabel]')
			.eq(0)
			.should('have.css', 'line-height', '27px')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.should('have.css', 'font-size', '18px')
			.should('have.css', 'font-weight', '700');

		cy.get('[data-cy=FilterSwitchLabel]')
			.eq(1)
			.should('have.css', 'line-height', '27px')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.should('have.css', 'font-size', '18px')
			.should('have.css', 'font-weight', '400');

		cy.get('[data-cy=FilterSwitchControl]').trigger('click');

		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(1000);

		cy.get('[data-cy=FilterSwitchControl]')
			.should('have.css', 'position', 'relative')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.should('have.css', 'width', '84px')
			.should('have.css', 'height', '48px')
			.should('have.css', 'padding', '6px')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'border-radius', '24px');

		cy.get('[data-cy=FilterSwitchIndicator]')
			.should('have.css', 'position', 'relative')
			.should('have.css', 'left', '36px')
			.should('have.css', 'height', '36px')
			.should('have.css', 'width', '36px')
			.should('have.css', 'background-color', 'rgb(18, 76, 177)')
			.should('have.css', 'border-radius', '50%')
			.should('have.css', 'position', 'relative');

		cy.get('[data-cy=FilterSwitchLabel]')
			.eq(0)
			.should('have.css', 'line-height', '27px')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.should('have.css', 'font-size', '18px')
			.should('have.css', 'font-weight', '400');

		cy.get('[data-cy=FilterSwitchLabel]')
			.eq(1)
			.should('have.css', 'line-height', '27px')
			.should('have.css', 'color', 'rgb(255, 255, 255)')
			.should('have.css', 'font-size', '18px')
			.should('have.css', 'font-weight', '700');
	});
});
