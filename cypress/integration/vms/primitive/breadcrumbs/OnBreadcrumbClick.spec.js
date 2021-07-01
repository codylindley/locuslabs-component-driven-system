/// <reference types="cypress" />
describe('Breadcrumbs Component', () => {
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
			'VMS Components/Primitive Components/Breadcrumbs',
			'onBreadcrumbClick'
		);
	});

	it('onBreadcrumbClick', () => {
		cy.get('#selectedLabel').should('have.text', 'Click on a breadcrumb...');

		cy.get('[data-cy=Breadcrumb]').eq(1).click();

		cy.get('#selectedLabel').should('have.text', 'Breadcrumb clicked: Are');

		cy.get('[data-cy=Breadcrumb]').eq(2).click();

		cy.get('#selectedLabel').should('have.text', 'Breadcrumb clicked: Are');
	});
});
