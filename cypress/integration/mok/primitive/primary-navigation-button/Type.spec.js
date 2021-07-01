/// <reference types="cypress" />

describe('Primary Navigation Button Component', () => {
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
			'MOK Components/Primitive Components/Primary Navigation Button',
			'Type'
		);
	});

	it('Type', () => {
		cy.get('[data-cy=PrimaryNavigationButtonContainer]:eq(0)')
			.should('have.css', 'boxShadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'borderRadius', '4px')
			.should('have.css', 'height', '56px')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=PrimaryNavigationButtonContainer]:eq(1)')
			.should('have.css', 'boxShadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'borderRadius', '4px 0px 0px 4px')
			.should('have.css', 'height', '56px')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=PrimaryNavigationButtonContainer]:eq(2)')
			.should('have.css', 'boxShadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'borderRadius', '0px 4px 4px 0px')
			.should('have.css', 'height', '56px')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
});
