describe('Zoom Control Component', () => {
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
			'MOL Components/Desktop/Domain Components/Zoom Control',
			'Default'
		);
	});

	it('Zoom in has correct icon', () => {
		cy.get('[data-cy=Box]:first svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/zoom.in.svg'
		);
	});

	it('Zoom out has correct icon', () => {
		cy.get('[data-cy=Box]:last svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/zoom.out.svg'
		);
	});

	it('Zoom in shows tooltip with correct text', () => {
		cy.get('[data-cy=Box]:first button').trigger('mouseover');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]:first')
			.should('be.visible')
			.and('have.text', 'Zoom In');
		cy.get('[data-cy=Box]:first button').trigger('mouseout');
		cy.get('[data-cy=Tooltip]:first').should('be.hidden');
	});

	it('Zoom out shows tooltip with correct text', () => {
		cy.get('[data-cy=Box]:last button').trigger('mouseover');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]:last')
			.should('be.visible')
			.and('have.text', 'Zoom Out');
		cy.get('[data-cy=Box]:last button').trigger('mouseout');
		cy.get('[data-cy=Tooltip]:last').should('be.hidden');
	});

	it('Zoom in click event is firing', () => {
		cy.get('[name="zoom.in"]')
			.closest('button')
			.trigger('mousedown')
			.should(() => {
				expect(window.sessionStorage.getItem('Zoom in was click')).to.equal(
					'true'
				);
			});

		cy.get('[name="zoom.in"]').closest('button').trigger('mouseup');
	});

	it('Zoom out click event is firing', () => {
		cy.get('[name="zoom.out"]')
			.closest('button')
			.trigger('mousedown')
			.should(() => {
				expect(window.sessionStorage.getItem('Zoom out was click')).to.equal(
					'true'
				);
			});

		cy.get('[name="zoom.out"]').closest('button').trigger('mouseup');
	});
});
