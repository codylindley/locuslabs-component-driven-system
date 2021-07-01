describe('VMS Segmented Control Component', () => {
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
			'VMS Components/Primitive Components/Segmented Control',
			'WithActiveChanged'
		);
	});

	it('Arrivals control is active', () => {
		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(1)')
			.should('exist')
			.and('have.css', 'height', '38px')
			.and('have.css', 'width', '115px')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)')
			.and('have.css', 'color', 'rgb(255, 255, 255)');
		cy.get('[data-cy=SegmentedControl] [data-cy=Control]:eq(0)')
			.should('exist')
			.and('have.css', 'height', '38px')
			.and('have.css', 'width', '115px')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'color', 'rgb(102, 102, 102)');
	});
});
