describe('Location Marker Component', () => {
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
			'LabelPosition'
		);
	});

	it('Top location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarker].top').should(
			'have.css',
			'flex-direction',
			'column'
		);

		cy.get('[data-cy=LocationMarkerLabel].top').should(
			'have.css',
			'margin-bottom',
			'8px'
		);
	});

	it('Right location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarker].right').should(
			'have.css',
			'flex-direction',
			'row-reverse'
		);

		cy.get('[data-cy=LocationMarkerLabel].right')
			.should('have.css', 'margin-left', '3px')
			.and('have.css', 'flex-direction', 'row-reverse');

		cy.get('[data-cy=LocationMarkerLabel].right svg')
			.should('have.css', 'margin-right', '-4px')
			.and(
				'have.css',
				'transform',
				'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'
			);
	});

	it('Bottom location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarker].bottom').should(
			'have.css',
			'flex-direction',
			'column-reverse'
		);

		cy.get('[data-cy=LocationMarkerLabel].bottom')
			.should('have.css', 'margin-top', '8px')
			.and('have.css', 'flex-direction', 'column-reverse');

		cy.get('[data-cy=LocationMarkerLabel].bottom svg').should(
			'have.css',
			'transform',
			'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'
		);
	});

	it('Left location Marker component has correct styling', () => {
		cy.get('[data-cy=LocationMarker].left').should(
			'have.css',
			'flex-direction',
			'row'
		);

		cy.get('[data-cy=LocationMarkerLabel].left')
			.should('have.css', 'margin-right', '3px')
			.and('have.css', 'flex-direction', 'row');

		cy.get('[data-cy=LocationMarkerLabel].left svg')
			.should('have.css', 'margin-left', '-4px')
			.and(
				'have.css',
				'transform',
				'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'
			);
	});
});
