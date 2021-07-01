describe('Location Marker Component - With Props', () => {
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
			'WithAllProps'
		);
	});

	it('Location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarkerLabel].display').should(
			'have.css',
			'max-width',
			'640px'
		);
		cy.get('[data-cy=LocationMarkerLabel].editor').should(
			'have.css',
			'max-width',
			'320px'
		);

		cy.get('[data-cy=LocationMarkerLabel].display [data-cy=Box]')
			.should('have.css', 'background-color', 'rgb(0, 139, 139)')
			.and('have.css', 'border-radius', '20px');

		cy.get(
			'[data-cy=LocationMarkerLabel].display [data-cy=Triangle] path'
		).should('have.attr', 'fill', 'darkcyan');

		cy.get('[data-cy=LocationMarkerLabel].editor [data-cy=Box]')
			.should('have.css', 'background-color', 'rgb(255, 192, 203)')
			.and('have.css', 'border-radius', '0px');

		cy.get(
			'[data-cy=LocationMarkerLabel].editor [data-cy=Triangle] path'
		).should('have.attr', 'fill', 'pink');

		cy.get('[data-cy=LocationMarkerLabel].display [data-cy=Text]').should(
			'have.css',
			'color',
			'rgb(255, 192, 203)'
		);

		cy.get('[data-cy=LocationMarkerLabel].editor [data-cy=Text]').should(
			'have.css',
			'color',
			'rgb(0, 139, 139)'
		);

		cy.get('[data-cy=LocationMarker].display [data-cy=Person] path').should(
			'have.attr',
			'fill',
			'pink'
		);

		cy.get('[data-cy=LocationMarker].display [data-cy=Person] path')
			.eq(2)
			.should('have.attr', 'fill', 'darkcyan');

		cy.get('[data-cy=LocationMarker].editor [data-cy=Person] path').should(
			'have.attr',
			'fill',
			'darkcyan'
		);

		cy.get('[data-cy=LocationMarker].editor [data-cy=Person] path')
			.eq(2)
			.should('have.attr', 'fill', 'pink');
	});
});
