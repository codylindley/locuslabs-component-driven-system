describe('Outline Button Component', () => {
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
			'VMS Components/Primitive Components/Outline Button',
			'Default'
		);
	});

	it('Outline Button active and focus', () => {
		cy.get('[data-cy=OutlineButton]').focus();
		cy.get('[data-cy=OutlineButton]').should(
			'have.css',
			'outline',
			'rgb(18, 76, 177) none 0px'
		);
		cy.get('[data-cy=OutlineButton]').trigger('mousedown');
		cy.get('[data-cy=OutlineButton]').should(
			'have.css',
			'outline',
			'rgb(18, 76, 177) none 0px'
		);
	});
});
