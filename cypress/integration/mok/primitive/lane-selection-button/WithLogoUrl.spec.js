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
			'MOK Components/Primitive Components/Lane Selection Button',
			'WithLogoUrl'
		);
	});

	it('Story: WithLogoUrl', () => {
		cy.get('[data-cy=LaneSelectionButton]').should('exist');
	});

	it('Lane selection button has correct height and background color', () => {
		cy.get('[data-cy=LaneSelectionButton]').should(
			'have.css',
			'height',
			'54px'
		);
	});

	it('Wide lane selection button has correct background color', () => {
		cy.get('[data-cy=LaneSelectionButton] img').should(
			'have.attr',
			'src',
			'https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/logo/tsapre.svg'
		);
	});
});
