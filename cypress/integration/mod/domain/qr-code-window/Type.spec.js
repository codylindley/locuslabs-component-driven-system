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
		cy.loadStory('MOD Components/Domain Components/QR Code Window', 'Type');
	});

	describe('Type: QRCodeWindow Display', () => {
		it('QRCodeWindow', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(0)')
				.and('have.css', 'width', '1079px')
				.and('have.css', 'padding', '32px 0px')
				.and('have.css', 'backgroundColor', 'rgb(244, 244, 244)');
		});

		it('HeadlineContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=HeadlineContainer]')
				.should('have.css', 'width', '1015px')
				.and('have.css', 'padding', '32px')
				.and('have.css', 'borderRadius', '8px')
				.and('have.css', 'backgroundColor', 'rgb(18, 76, 177)')
				.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px');

			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=PrimaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(255, 255, 255)')
				.and('have.css', 'fontSize', '44px')
				.and('have.css', 'fontWeight', '700')
				.and('have.css', 'height', '75px')
				.and('have.css', 'lineHeight', '66px');

			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=SecondaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(255, 255, 255)')
				.and('have.css', 'margin-top', '8px')
				.and('have.css', 'fontSize', '26px')
				.and('have.css', 'fontWeight', '400')
				.and('have.css', 'maxHeight', '131px')
				.and('have.css', 'lineHeight', '39px');
		});

		it('StrokeContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=StrokeContainer]')
				.should('have.css', 'width', '1047px')
				.and('have.css', 'margin', '15px 0px')
				.and('have.css', 'position', 'relative');
		});

		it('InstructionsContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=InstructionsContainer]')
				.should('have.css', 'width', '1015px')
				.and('have.css', 'height', '278px')
				.and('have.css', 'padding', '32px')
				.and('have.css', 'borderRadius', '8px')
				.and('have.css', 'backgroundColor', 'rgb(255, 255, 255)')
				.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px');

			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=InstructionsContainer]')
				.children('[data-cy=PrimaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(51, 51, 51)')
				.and('have.css', 'fontSize', '44px')
				.and('have.css', 'fontWeight', '700')
				.and('have.css', 'height', '75px')
				.and('have.css', 'lineHeight', '66px');

			cy.get('[data-cy=QRCodeWindow]:eq(0) [data-cy=InstructionsContainer]')
				.children('[data-cy=SecondaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(102, 102, 102)')
				.and('have.css', 'margin-top', '20px')
				.and('have.css', 'fontSize', '26px')
				.and('have.css', 'fontWeight', '400')
				.and('have.css', 'maxHeight', '131px')
				.and('have.css', 'lineHeight', '39px');
		});
	});

	describe('Type: QRCodeWindow Editor', () => {
		it('QRCodeWindow', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(1)')
				.and('have.css', 'width', '1079px')
				.and('have.css', 'padding', '16px 0px')
				.and('have.css', 'backgroundColor', 'rgb(244, 244, 244)');
		});

		it('HeadlineContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=HeadlineContainer]')
				.should('have.css', 'width', '1047px')
				.and('have.css', 'padding', '16px')
				.and('have.css', 'borderRadius', '4px')
				.and('have.css', 'backgroundColor', 'rgb(18, 76, 177)')
				.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px');

			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=PrimaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(255, 255, 255)')
				.and('have.css', 'fontSize', '22px')
				.and('have.css', 'fontWeight', '700')
				.and('have.css', 'height', '38px')
				.and('have.css', 'lineHeight', '33px');

			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=SecondaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(255, 255, 255)')
				.and('have.css', 'margin-top', '4px')
				.and('have.css', 'fontSize', '13px')
				.and('have.css', 'fontWeight', '400')
				.and('have.css', 'maxHeight', '66px')
				.and('have.css', 'lineHeight', '19px');
		});

		it('StrokeContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=StrokeContainer]')
				.should('have.css', 'width', '1063px')
				.and('have.css', 'margin', '15px 0px')
				.and('have.css', 'position', 'relative');
		});

		it('InstructionsContainer', () => {
			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=InstructionsContainer]')
				.should('have.css', 'width', '1047px')
				.and('have.css', 'height', '139px')
				.and('have.css', 'padding', '16px')
				.and('have.css', 'borderRadius', '4px')
				.and('have.css', 'backgroundColor', 'rgb(255, 255, 255)')
				.and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px');

			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=InstructionsContainer]')
				.children('[data-cy=PrimaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(51, 51, 51)')
				.and('have.css', 'fontSize', '22px')
				.and('have.css', 'fontWeight', '700')
				.and('have.css', 'height', '38px')
				.and('have.css', 'lineHeight', '33px');

			cy.get('[data-cy=QRCodeWindow]:eq(1) [data-cy=InstructionsContainer]')
				.children('[data-cy=SecondaryText]')
				.should('have.css', 'textAlign', 'center')
				.and('have.css', 'color', 'rgb(102, 102, 102)')
				.and('have.css', 'margin-top', '10px')
				.and('have.css', 'fontSize', '13px')
				.and('have.css', 'fontWeight', '400')
				.and('have.css', 'maxHeight', '66px')
				.and('have.css', 'lineHeight', '19px');
		});
	});
});
