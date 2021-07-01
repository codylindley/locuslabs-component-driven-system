describe('Primary Button Component', () => {
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
			'VMS Components/Primitive Components/Primary Button',
			'Default'
		);
	});

	it('PrimaryButton active and focus', () => {
		cy.get('[data-cy=PrimaryButton]').focus();
		cy.get('[data-cy=PrimaryButton]').should(
			'have.css',
			'outline',
			'rgb(255, 255, 255) none 0px'
		);
		cy.get('[data-cy=PrimaryButton]').trigger('mousedown');
		cy.get('[data-cy=PrimaryButton]').should(
			'have.css',
			'outline',
			'rgb(255, 255, 255) none 0px'
		);
	});
});
