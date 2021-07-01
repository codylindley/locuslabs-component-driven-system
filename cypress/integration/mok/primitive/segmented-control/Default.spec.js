describe('Segmented Control Component', () => {
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
			'MOK Components/Primitive Components/Segmented Control',
			'Default'
		);
	});

	it('Controls have equal size and style', () => {
		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(0)')
			.should('exist')
			.and('have.css', 'height', '48px')
			.and('have.css', 'width', '180px')
			.and('have.css', 'padding', '8px')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)')
			.and('have.css', 'color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(1)')
			.should('exist')
			.and('have.css', 'height', '48px')
			.and('have.css', 'width', '180px')
			.and('have.css', 'padding', '8px')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'color', 'rgb(18, 76, 177)');

		for (let i = 0; i <= 1; i++) {
			cy.get(
				`[data-cy=SegmentedControl] [data-cy=Control]:eq(${i}) [data-cy=Box]`
			)
				.should('exist')
				.and('have.css', 'height', '32px')
				.and('have.css', 'margin-right', '8px');
		}
	});

	it('Clicking control toggles it to active', () => {
		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(1)')
			.click()
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');

		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(0)')
			.click()
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');
	});
});
