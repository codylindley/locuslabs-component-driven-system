describe('Walk Time Matrix Component', () => {
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
		cy.loadStory('MOD Components/Domain Components/Walk Time Matrix', 'Editor');
	});

	it('Does display as empty', () => {
		cy.get('[data-cy=WalkTimeMatrix] [data-cy=Text]').should('not.exist');
	});

	it('Walk Time Matrix component has correct styling', () => {
		cy.get('[data-cy=WalkTimeMatrix]')
			.should('have.css', 'align-items', 'stretch')
			.and('have.css', 'align-content', 'stretch')
			.and('have.css', 'flex-direction', 'column')
			.and('have.css', 'border-radius', '4px')
			.and('have.css', 'width', '520px');

		cy.get('[data-cy=WalkTimeSectionWrapper]')
			.should('have.css', 'height', '21px')
			.and('have.css', 'background-color', 'rgb(51, 51, 51)');

		cy.get('[data-cy=WalkTimeColumnsWrapper]')
			.should('have.css', 'height', '84px')
			.and('have.css', 'backdrop-filter', 'blur(4px)')
			.and('have.css', 'background-color', 'rgba(255, 255, 255, 0.9)');
	});
});
