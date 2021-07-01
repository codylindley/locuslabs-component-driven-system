/// <reference types="cypress" />

describe('Modal Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Modal', 'Actions');
	});

	it('Story: Primary Button', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label=Primary]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(0)
			.children('[data-cy=PrimaryButton]')
			.should('exist');
	});

	it('Story: Secondary Button', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label=Secondary]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(1)
			.children('[data-cy=SecondaryButton]')
			.should('exist');
	});

	it('Story: Outline Button', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label=Outline]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(2)
			.children('[data-cy=OutlineButton]')
			.should('exist');
	});

	it('Story: Destructive Button', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label=Destructive]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(3)
			.children('[data-cy=DestructiveButton]')
			.should('exist');
	});

	it('Story: Two Actions', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label="Two Actions"]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(4)
			.children('[data-cy=PrimaryButton]')
			.should('exist');
		cy.get('[data-cy=ModalActionsContainer]')
			.eq(4)
			.children('[data-cy=SecondaryButton]')
			.should('exist');
	});

	it('Story: Close On Click', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[aria-label="Close On Click"]').click();

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(5)
			.children('[data-cy=PrimaryButton]')
			.click();

		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none'); // modal is closed
		cy.get('[aria-label="Close On Click"]').click(); // open agin

		cy.get('[data-cy=ModalActionsContainer]')
			.eq(5)
			.children('[data-cy=SecondaryButton]')
			.click();

		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none'); // modal is closed
	});
});
