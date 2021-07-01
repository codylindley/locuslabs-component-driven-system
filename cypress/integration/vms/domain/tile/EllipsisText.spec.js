describe('Tile Component', () => {
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
		cy.loadStory('VMS Components/Domain Components/Tile', 'EllipsisText');
	});

	it('EllipsisText', () => {
		cy.get('[data-cy=TileContainer]')
			.should('have.css', 'background-color', 'rgb(249, 249, 249)')
			.and('have.css', 'border-color', 'rgb(235, 235, 235)')
			.should('have.css', 'width', '600px');

		cy.get('[data-cy=EllipsisLabel]').should(($text) => {
			const elementHeight = $text[0].offsetHeight;
			const lineHeight = parseInt(
				window.getComputedStyle($text[0])['line-height']
			);
			const lines = elementHeight / lineHeight;
			expect(lines).to.be.eq(1);
		});

		cy.get('[data-cy=TooltipTrigger]').then(($elem) => {
			cy.log($elem.width());
			cy.log($elem.text());
		});
		/*cy.get('[data-cy=EllipsisLabel]').then(function ($elem) {

		});*/
	});
});
