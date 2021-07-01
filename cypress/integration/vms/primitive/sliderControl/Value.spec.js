/// <reference types="cypress" />
describe('Slider Control Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Slider Control', 'Value');
	});

	it('Value', () => {
		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(0)
			.should('have.css', 'right', '100px');

		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(1)
			.should('have.css', 'right', '0px');

		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(2)
			.should('have.css', 'right', '40px');

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(0)
			.should('have.css', 'left', `0px`);

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(1)
			.should('have.css', 'left', `100px`);

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(2)
			.should('have.css', 'left', `60px`);

		cy.get('[data-cy=SliderControl]')
			.eq(0)
			.children('div')
			.trigger('mousedown', 100, 0, {
				force: true,
			});

		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(0)
			.should('have.css', 'right', '0px');

		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(1)
			.should('have.css', 'right', '100px');

		cy.get('[data-cy=SliderControlProgressBar]')
			.eq(2)
			.should('have.css', 'right', '40px');

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(0)
			.should('have.css', 'left', `100px`);

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(1)
			.should('have.css', 'left', `0px`);

		cy.get('[data-cy=SliderControlTrackBar]')
			.eq(2)
			.should('have.css', 'left', `60px`);
	});
});
