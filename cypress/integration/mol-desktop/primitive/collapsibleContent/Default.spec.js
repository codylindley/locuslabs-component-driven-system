describe('Collapsible Content Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Collapsible Content',
			'Default'
		);
	});

	it('Collapse button has icon', () => {
		cy.get('[data-cy=CollapseButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/chevron.up.svg'
		);
	});

	it('CollapseButton icon rotates', () => {
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=CollapseButton] [data-cy=Icon]').should(
			'have.css',
			'transform',
			'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'
		);
	});

	it('Tooltip shows on CollapseButton with correct text', () => {
		cy.get('[data-cy=CollapseButton]')
			.trigger('mouseover')
			.trigger('mouseenter');
		cy.get('[data-cy=Tooltip]').should('have.text', 'Collapse Panel');
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=CollapseButton]')
			.trigger('mouseout')
			.trigger('mouseleave');
		cy.get('[data-cy=CollapseButton]')
			.trigger('mouseover')
			.trigger('mouseenter');
		cy.get('[data-cy=Tooltip]').should('have.text', 'Expand Panel');
	});

	it('Content can be collapsed and expanded with CollapseButton click', () => {
		cy.get('[data-cy=InnerContent]').should('be.visible');
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=InnerContent]').should('be.hidden');
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=InnerContent]').should('be.visible');
	});
});
