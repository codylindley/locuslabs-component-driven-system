/// <reference types="cypress" />
describe('Slider Control Component', () => {
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
			'VMS Components/Primitive Components/Slider Control',
			'MinAndMax'
		);
	});

	it('MinAndMax', () => {
		cy.get('[data-cy=Text]:eq(0)').should('have.text', 'Maximum value: 100');

		cy.get('[data-cy=Text]:eq(1)').should('have.text', 'Minimum value: -200');

		cy.get('[data-cy=Text]:eq(2)').should('have.text', 'Current value: -200');

		cy.get('[data-cy=SliderControl] > div')
			.eq(0)
			.trigger('mousedown', 364, 0, { force: true });

		cy.get('[data-cy=Text]:eq(2)').should('have.text', 'Current value: 100');
	});
});
