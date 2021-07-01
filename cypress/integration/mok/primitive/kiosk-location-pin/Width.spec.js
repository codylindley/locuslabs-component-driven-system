describe('Kiosk Location Pin Component', () => {
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
			'MOK Components/Primitive Components/Kiosk Location Pin',
			'Width'
		);
	});

	it('Width', () => {
		cy.get('[data-cy=KioskLocationPin] [data-cy=Pin] [data-cy=Box]:eq(1) svg')
			.should('exist') // is in dom
			.should(($svg) => {
				expect($svg.attr('data-src').split('/').slice(-1)[0]).to.equal(
					'kiosk.svg'
				);
			});

		cy.get('[data-cy=KioskLocationPin]').and('have.css', 'width', '300px');

		cy.get('[data-cy=KioskLocationPin] [data-cy=LabelContainer]')
			.should('exist')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'height', '56px');
	});
});
