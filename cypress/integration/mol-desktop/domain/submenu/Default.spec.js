describe('Submenu Component', () => {
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
		cy.loadStory('MOL Components/Desktop/Domain Components/Submenu', 'Default');
	});

	it('Submenu button has correct tooltip text', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible').contains('View Menu');
	});

	it('Submenu button has correct icon', () => {
		cy.get('[data-cy=MapNavButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/submenu.svg'
		);
	});

	it('Submenu button tooltip hides when submenu is opened', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOptions"]').should('be.visible');
		cy.get('[data-cy=Tooltip]').should('not.exist');
	});

	it('Submenu opens and closes on submenu button click', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOptions"]').should('be.visible');
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOptions"]').should('not.exist');
	});

	it('Submenu option displays icon and text', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOption"]:first svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/account.svg'
		);
		cy.get('[data-cy="MenuOption"]:first [data-cy="Text"]').should(
			'have.text',
			'Account'
		);
	});

	it('Submenu option click event is firing', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOption"]:last')
			.click()
			.should(() => {
				expect(window.sessionStorage.getItem('Logout clicked')).to.equal(
					'true'
				);
			});
	});

	it('Submenu collapses after option was clicked', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOption"]:last').click({ force: true });
		cy.get('[data-cy="MenuOptions"]').should('not.exist');
	});

	it('Submenu collapses after outside click was detected', () => {
		cy.get('[data-cy=Submenu] [data-cy=MapNavButton]').click({
			force: true,
		});
		cy.get('[data-cy="MenuOptions"]').should('exist');
		cy.get('body').click({ force: true });
		cy.get('[data-cy="MenuOptions"]').should('not.exist');
	});
});
