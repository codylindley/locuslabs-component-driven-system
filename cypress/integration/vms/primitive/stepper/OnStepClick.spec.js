/// <reference types="cypress" />
describe('Stepper Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Stepper', 'OnStepClick');
	});

	it('OnStepClick', () => {
		cy.get('[data-cy=Text]')
			.eq(0)
			.should('have.text', 'Please click on a step...');

		cy.get('[data-cy=Step]').eq(1).trigger('click');
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Step: Item 2 selected');

		cy.get('[data-cy=Step]').eq(3).trigger('click');
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Step: Item 4 selected');

		cy.get('[data-cy=Step]').eq(2).trigger('click');
		cy.get('[data-cy=Text]').eq(0).should('have.text', 'Step: Item 3 selected');
	});
});
