describe('Information Divider Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Information Divider',
			'PaddingPropAndEllipse'
		);
	});

	it('Story: Padding Prop And Ellipse', () => {
		cy.get('[data-cy=InformationDivider]')
			.should('exist') // is in dom
			.and(
				'have.text',
				'Test text here Test text here long very long text test here'
			) // has text "button"
			.and('have.css', 'width', '320px') // has 10px of padding
			.and('have.css', 'padding-left', '16px') // has 10px of padding
			.and('have.css', 'background-color', 'rgba(34, 102, 221, 0.05)');
	});
});
