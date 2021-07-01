describe('Checkbox Component', () => {
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
			'VMS Components/Primitive Components/Checkbox',
			'WithParentWidth'
		);
	});

	it('Checkbox label adjusts to parent width', () => {
		cy.get('[data-cy=CheckboxLabel]').should(($text) => {
			const elementHeight = $text[0].offsetHeight;
			const lineHeight = parseInt(
				window.getComputedStyle($text[0])['line-height']
			);
			const lines = elementHeight / lineHeight;
			expect(lines).to.be.eq(2);
		});

		cy.get('[data-cy=CheckboxLabel]').should('have.css', 'width', '152px');
	});
});
