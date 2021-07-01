describe('Sign On Button', () => {
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
			'MOL Components/Mobile/Primitive Components/Single Sign On Button',
			'Disabled'
		);
	});

	it('Disabled', () => {
		cy.get('[data-cy=SingleSignOnButton]')
			.should('be.disabled')
			.and('have.css', 'height', '46px')
			.and('have.css', 'width', '275px')
			.and('have.css', 'border-radius', '8px')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'border', '1px solid rgba(102, 102, 102, 0.3)');

		cy.get('[data-cy=Container]').should('have.css', 'margin', '0px 16px');
	});

	it('Text should be css properties correctly', () => {
		cy.get('[data-cy=Text]')
			.should('have.css', 'line-height', '18px')
			.and('have.css', 'font-size', '14px')
			.and('have.css', 'margin-left', '4px')
			.and('have.css', 'text-align', 'left')
			.and('have.css', 'color', 'rgba(102, 102, 102, 0.3)');
	});

	it('Icon should be css properties correctly', () => {
		cy.get('[data-cy=Icon]')
			.should('have.css', 'height', '24px')
			.and('have.css', 'width', '16px')
			.and('have.css', 'color', 'rgba(102, 102, 102, 0.3)');
	});
});
