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
			'WithSecondaryLabel'
		);
	});

	it('WithSecondaryLabel', () => {
		cy.get('[data-cy=PrimaryNavigationButtonContainer]')
			.should('have.css', 'boxShadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'borderRadius', '4px')
			.should('have.css', 'height', '56px')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=Icon]')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.attr', 'name', 'directions.filled');

		cy.get('[data-cy=TextContainer]')
			.should('have.css', 'margin-left', '12px')
			.should('have.css', 'maxWidth', 'none');

		cy.get('[data-cy=PrimaryLabel]')
			.should('have.css', 'fontSize', '16px')
			.should('have.css', 'fontWeight', '500')
			.should('have.css', 'lineHeight', '24px');

		cy.get('[data-cy=SecondaryLabel]')
			.should('have.css', 'fontSize', '14px')
			.should('have.css', 'fontWeight', '400')
			.should('have.css', 'lineHeight', '21px');
	});
});
