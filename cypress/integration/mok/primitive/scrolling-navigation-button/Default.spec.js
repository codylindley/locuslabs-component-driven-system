describe('Scrolling Navigation Button Component', () => {
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
			'MOK Components/Primitive Components/Scrolling Navigation Button',
			'Default'
		);
	});

	it('Default', () => {
		cy.get('[data-cy=ScrollingNavigationButton] > div')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'space-between')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'max-width', '374px')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=ScrollingNavigationButtonLabel]')
			.should('have.css', 'line-height', '24px')
			.should('have.css', 'text-align', 'center')
			.should('have.css', 'color', 'rgb(18, 76, 177)')
			.should('have.css', 'fontSize', '16px')
			.should('have.css', 'fontWeight', '500');

		cy.get('[data-cy=ScrollingNavigationLeftButton]')
			.should('have.css', 'height', '56px')
			.should('have.css', 'min-width', '54px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'border-radius', '4px 0px 0px 4px')
			.children('[data-cy=Icon]')
			.should('have.attr', 'name', 'chevron.left');

		cy.get('[data-cy=ScrollingNavigationRightButton]')
			.should('have.css', 'height', '56px')
			.should('have.css', 'min-width', '54px')
			.should('have.css', 'display', 'flex')
			.should('have.css', 'align-items', 'center')
			.should('have.css', 'justify-content', 'center')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.2) 0px 6px 10px 0px')
			.should('have.css', 'border-radius', '0px 4px 4px 0px')
			.children('[data-cy=Icon]')
			.should('have.attr', 'name', 'chevron.right');
	});
});
