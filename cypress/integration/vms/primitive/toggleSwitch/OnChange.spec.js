/// <reference types="cypress" />
describe('Toggle Switch Component', () => {
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
			'VMS Components/Primitive Components/Toggle Switch',
			'OnChange'
		);
	});

	it('OnChange', () => {
		cy.get('[data-cy=ToggleSwitchLabel]').should(
			'have.text',
			'Click me to change this label!'
		);

		cy.get('[data-cy=ToggleSwitch]').click();

		cy.get('[data-cy=ToggleSwitchLabel]').should(
			'have.text',
			'"onChange" callback was called with: true'
		);

		cy.get('[data-cy=ToggleSwitch]').click();

		cy.get('[data-cy=ToggleSwitchLabel]').should(
			'have.text',
			'"onChange" callback was called with: false'
		);
	});
});
