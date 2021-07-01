describe('Toast Component', () => {
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
			'MOL Components/Mobile/Primitive Components/Toast',
			'WithTextSizes'
		);
		cy.viewport('iphone-6');
	});

	it('Toast text is scaling', () => {
		cy.get('[data-cy=ToastText]')
			.eq(0)
			.should('have.css', 'font-size', '14px')
			.and('not.have.css', '-webkit-line-clamp', '1');
		cy.get('[data-cy=ToastText]').eq(1).should('have.css', 'font-size', '12px');
		cy.get('[data-cy=ToastText]')
			.eq(2)
			.should('have.css', 'font-size', '12px')
			.and('have.css', '-webkit-line-clamp', '1');
	});
});
