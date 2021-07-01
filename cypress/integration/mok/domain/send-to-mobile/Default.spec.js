describe('Send To Mobile Component', () => {
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
		cy.loadStory('MOK Components/Domain Components/Send To Mobile', 'Default');
	});

	it('Default', () => {
		cy.get('[data-cy=SendToMobile]')
			.should('have.css', 'width', '440px')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=EstimatedTime]')
			.should('have.css', 'width', '100px')
			.should('have.css', 'min-height', '100px')
			.and('have.css', 'background-color', 'rgb(34, 102, 221)');

		cy.get('[data-cy=PoiInformation]')
			.should('have.css', 'width', '260px')
			.should('have.css', 'min-height', '100px')
			.and('have.css', 'background-color', 'rgba(34, 102, 221, 0.08)');

		cy.get('[data-cy=QrCode]')
			.should('have.css', 'width', '170px')
			.should('have.css', 'height', '170px')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)');

		cy.get('[data-cy=QrCodeCard]')
			.should('have.css', 'width', '360px')
			.should('have.css', 'height', '340px')
			.and('have.css', 'background-color', 'rgba(34, 102, 221, 0.1)');

		cy.get('[data-cy=InstructionsContainer]')
			.should('have.css', 'width', '360px')
			.should('have.css', 'height', '244px')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
	});
});
