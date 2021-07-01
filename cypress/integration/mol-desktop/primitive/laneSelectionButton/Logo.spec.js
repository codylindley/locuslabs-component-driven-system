describe('Lane Selection Button Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Lane Selection Button',
			'Logo'
		);
	});

	it('Lane selection button has correct height and background color', () => {
		cy.get('[data-cy=LaneSelectionButton]:eq(0)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'height', '52px');
	});

	it('Wide lane selection button has correct background color, width, and height', () => {
		cy.get('[data-cy=LaneSelectionButton]:eq(1)')
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
			.and('have.css', 'width', '351px')
			.and('have.css', 'height', '52px');
	});

	it('Wide lane selection button has correct background color', () => {
		cy.get('[data-cy=LaneSelectionButton]:eq(1) img').should(
			'have.attr',
			'src',
			'https://content.locuslabs.com/airport/spritesheet-svg/lhr/A1JBKAEKZ89XDX/venue-logo.png'
		);
	});
});
