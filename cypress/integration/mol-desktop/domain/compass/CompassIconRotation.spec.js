describe('Compass Component', () => {
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
			'MOL Components/Desktop/Domain Components/Compass',
			'IconRotation'
		);
	});

	it('Compass has icon', () => {
		cy.get('[data-cy=Compass] svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/compass.color.svg'
		);
	});

	it('Compass can rotate icon', () => {
		cy.get('[data-cy=Compass] [data-cy=Icon]').and(
			'have.css',
			'transform',
			'matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)'
		);
	});

	it('Tooltip shows on Compass with correct text', () => {
		cy.get('[data-cy=Compass]').trigger('mouseover').trigger('mouseenter');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').should('have.text', 'Reset Map Rotation');
		cy.get('[data-cy=Compass]').trigger('mouseout').trigger('mouseleave');
		cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=Tooltip]').should('not.be.visible');
	});

	it('Compass click event is firing', () => {
		cy.get('[data-cy=Compass]')
			.trigger('click')
			.should(() => {
				expect(window.sessionStorage.getItem('Compass was click')).to.equal(
					'true'
				);
			});
	});
});
