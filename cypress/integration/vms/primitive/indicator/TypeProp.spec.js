describe('Indicator Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Indicator', 'TypeProp');
	});

	it('Story: Type Prop', () => {
		cy.get('[data-cy=Indicator]:eq(0)  > div')
			.should('exist') // is in dom
			.and('have.css', 'background-color', 'rgb(176, 0, 0)');
		cy.get('[data-cy=Indicator]:eq(1)  > div')
			.should('exist') // is in dom
			.and('have.css', 'background-color', 'rgb(0, 102, 43)');
		cy.get('[data-cy=Indicator]:eq(2)  > div')
			.should('exist') // is in dom
			.and('have.css', 'background-color', 'rgb(216, 216, 216)');
		cy.get('[data-cy=Indicator]:eq(3)  > div')
			.should('exist') // is in dom
			.and('have.css', 'background-color', 'rgb(157, 56, 0)');
		cy.get('[data-cy=Indicator]:eq(4)  > div')
			.should('exist') // is in dom
			.and('have.css', 'background-color', 'rgb(0, 91, 148)');
	});
});
