describe('Box Component', () => {
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
		cy.loadStory('MOD Components/Primitive Components/Box', 'CommonProps');
	});

	it('Story: Common Props', () => {
		cy.get('[data-cy=Box]')
			.should('exist') // is in dom
			.and('have.text', 'button') // has text "button"
			.and('to.match', 'button') // is a button html element
			.and('have.css', 'padding', '10px') // has 10px of padding
			.and('have.css', 'color', 'rgb(255, 0, 0)') // is red
			.and('have.css', 'border', '2px solid rgb(255, 0, 0)'); // has 2px border is red
	});
});
