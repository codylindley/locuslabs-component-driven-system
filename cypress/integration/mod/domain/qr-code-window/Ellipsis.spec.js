/// <reference types="cypress" />

describe('QR Code Window', () => {
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
		cy.loadStory('MOD Components/Domain Components/QR Code Window', 'Ellipsis');
	});

	it('Ellipsis: QRCodeWindow', () => {
		cy.get('[data-cy=HeadlineContainer]')
			.children('[data-cy=PrimaryText]')
			.should(($text) => {
				const elementHeight = $text[0].offsetHeight;
				const lineHeight = parseInt(
					window.getComputedStyle($text[0])['line-height']
				);
				const lines = Math.floor(elementHeight / lineHeight);
				expect(lines).to.be.eq(1);
			});
		cy.get('[data-cy=HeadlineContainer]')
			.children('[data-cy=SecondaryText]')
			.should(($text) => {
				const elementHeight = $text[0].offsetHeight;
				const lineHeight = parseInt(
					window.getComputedStyle($text[0])['line-height']
				);
				const lines = elementHeight / lineHeight;
				expect(lines).to.be.eq(3);
			});
	});
});
