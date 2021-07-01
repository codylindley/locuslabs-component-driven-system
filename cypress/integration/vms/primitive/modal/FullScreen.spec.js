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
		cy.loadStory('VMS Components/Primitive Components/Modal', 'FullScreen');
	});

	it('Story: FullScreen', () => {
		cy.get('[data-cy=Modal]').should('have.css', 'display', 'none');
		cy.get('[data-cy=OpenModalButton]').click();

		cy.get('[data-cy=Modal]')
			.should('have.css', 'width', '920px') // var(--dialogWidth) 100%-80px
			.and('have.css', 'height', '580px'); //var(--dialogHeight) 100%-80px
	});
});
