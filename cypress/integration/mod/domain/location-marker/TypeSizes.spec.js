describe('Location Marker Component - sm', () => {
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
			'MOD Components/Domain Components/Location Marker',
			'TypeSizes'
		);
	});

	it('Small Location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarkerLabel]:eq(0)')
			.should('have.css', 'max-width', '320px')
			.and('have.css', 'margin-bottom', '4px');

		cy.get('[data-cy=LocationMarkerLabel]:eq(0) [data-cy=Box]')
			.should('have.css', 'border-radius', '6px')
			.and('have.css', 'padding', '5px 10px');

		cy.get('[data-cy=LocationMarkerLabel]:eq(0) [data-cy=Text]').should(
			'have.css',
			'font-size',
			'11px'
		);
	});

	it('Large Location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarkerLabel]:eq(1)')
			.should('have.css', 'max-width', '640px')
			.and('have.css', 'margin-bottom', '8px');

		cy.get('[data-cy=LocationMarkerLabel]:eq(1) [data-cy=Box]')
			.should('have.css', 'border-radius', '12px')
			.and('have.css', 'padding', '10px 20px');

		cy.get('[data-cy=LocationMarkerLabel]:eq(1) [data-cy=Text]').should(
			'have.css',
			'font-size',
			'22px'
		);
	});
});
