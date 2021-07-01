describe('QR Code Card Component', () => {
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
		cy.loadStory('MOD Components/Domain Components/QR Code Card', 'Default');
	});

	it('Default', () => {
		cy.get('[data-cy=Container]')
			.should('have.css', 'width', '320px')
			.and('have.css', 'height', '320px');

		cy.get('[data-cy=TitleContainer]')
			.should('have.css', 'width', '320px')
			.and('have.css', 'height', '54px')
			.and('have.css', 'border-radius', '8px 8px 0px 0px');

		cy.get('[data-cy=TitleText]')
			.should('have.css', 'font-size', '22px')
			.and('have.css', 'font-weight', '500');

		cy.get('[data-cy=QRCodePlaceholder]').should('have.css', 'margin', '10px');

		cy.get('[data-cy=PrimaryText]')
			.should('have.css', 'max-height', '71px')
			.and('have.css', 'font-weight', '700')
			.and('have.css', 'line-height', '66px')
			.and('have.css', 'margin', '0px 32px 24px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'text-overflow', 'ellipsis');

		cy.get('[data-cy=SecondaryText]')
			.should('have.css', '-webkit-line-clamp', '5')
			.and('have.css', 'font-weight', '400')
			.and('have.css', 'margin', '0px 32px')
			.and('have.css', 'line-height', '33px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'text-overflow', 'clip');
	});
});
