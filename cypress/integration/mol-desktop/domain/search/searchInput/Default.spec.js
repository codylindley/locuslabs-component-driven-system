describe('Search Input Component', () => {
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
			'MOL Components/Desktop/Domain Components/Search/Subcomponents/Search Input',
			'Default'
		);
	});

	it('Input displays default placeholder', () => {
		cy.get('[data-cy=SearchInput] input')
			.invoke('attr', 'placeholder')
			.should('contain', 'Search');
	});

	it('Search Input buttons have correct tooltips', () => {
		cy.get('[data-cy=SearchButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').contains('Search');
		cy.get('[data-cy=SearchButton]').trigger('mouseout');

		cy.get('[data-cy=DirectionsButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').contains('Get Directions');
		cy.get('[data-cy=SearchButton]').trigger('mouseout');

		cy.get('[data-cy=SearchButton]').click({ force: true });
		cy.get('[data-cy=BackButton]').should('be.visible');
		cy.get('[data-cy=BackButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').contains('Home');

		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=ClearButton]').should('be.visible');
		cy.get('[data-cy=ClearButton]').trigger('mouseover');
		cy.get('[data-cy=Tooltip]').contains('Clear Search');
	});

	it('Search Input buttons have correct icons', () => {
		cy.get('[data-cy=SearchButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/search.web.svg'
		);

		cy.get('[data-cy=DirectionsButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);

		cy.get('[data-cy=SearchButton]').click();
		cy.get('[data-cy=BackButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/arrow.left.svg'
		);

		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=ClearButton] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/close.svg'
		);
	});

	it('Input gets focused when search icon is clicked', () => {
		cy.get('[data-cy=SearchButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').should('have.focus');
	});

	it('Input gets cleared when close icon is clicked but remains focused', () => {
		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=ClearButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('have.focus');
	});

	it('Input gets cleared when back icon is clicked', () => {
		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=BackButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
	});

	it('Input gets cleared when user hits Escape key', () => {
		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=SearchInput] input').type('{esc}');
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
	});

	it('Search Input buttons side effect functions are called', () => {
		cy.get('[data-cy=SearchButton]').click({ force: true });
		cy.get('[data-cy=BackButton]')
			.click({ force: true })
			.should(() => {
				expect(
					window.sessionStorage.getItem('Back button was clicked')
				).to.equal('true');
			});

		cy.get('[data-cy=DirectionsButton]')
			.click({ force: true })
			.should(() => {
				expect(
					window.sessionStorage.getItem('Directions icon was clicked')
				).to.equal('true');
			});

		cy.get('[data-cy=SearchInput] input').type('c');
		cy.get('[data-cy=ClearButton]')
			.click({ force: true })
			.should(() => {
				expect(
					window.sessionStorage.getItem('Clear button was clicked')
				).to.equal('true');
			});

		cy.get('[data-cy=SearchInput] input')
			.focus()
			.should(() => {
				expect(window.sessionStorage.getItem('Input was focused')).to.equal(
					'true'
				);
			})
			.type('{enter}')
			.should(() => {
				expect(
					window.sessionStorage.getItem('Return key was pressed')
				).to.equal('true');
			});
	});
});
