/// <reference types="cypress" />
describe('Tab Menu Component', () => {
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
			'VMS Components/Primitive Components/Tab Menu',
			'ControlledComponent'
		);
	});

	const checkTab = (tab, selected) => {
		cy.get('[data-cy=Tab]')
			.eq(tab)
			.should(selected ? 'be.selected' : 'not.be.selected');
	};

	it('ControlledComponent', () => {
		checkTab(0, true);
		checkTab(1, false);
		checkTab(2, false);
		checkTab(3, false);
		checkTab(4, false);
		checkTab(5, false);

		cy.get('[aria-label="Select Tab #2"]').click();

		checkTab(0, false);
		checkTab(1, true);
		checkTab(2, false);
		checkTab(3, false);
		checkTab(4, false);
		checkTab(5, false);

		cy.get('[aria-label="Select Tab #4"]').click();

		checkTab(0, false);
		checkTab(1, false);
		checkTab(2, false);
		checkTab(3, true);
		checkTab(4, false);
		checkTab(5, false);

		cy.get('[data-cy=Tab]').eq(2).click();

		checkTab(0, false);
		checkTab(1, false);
		checkTab(2, true);
		checkTab(3, false);
		checkTab(4, false);
		checkTab(5, false);

		cy.get('[aria-label="Select Tab #2"]').click();

		checkTab(0, false);
		checkTab(1, true);
		checkTab(2, false);
		checkTab(3, false);
		checkTab(4, false);
		checkTab(5, false);

		cy.get('[aria-label="Select last"]').click();

		checkTab(0, false);
		checkTab(1, false);
		checkTab(2, false);
		checkTab(3, false);
		checkTab(4, false);
		checkTab(5, true);
	});
});
