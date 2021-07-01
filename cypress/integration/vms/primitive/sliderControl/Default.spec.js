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
		cy.loadStory(
			'VMS Components/Primitive Components/Slider Control',
			'Default'
		);
	});

	it('Default', () => {
		// Default styles
		cy.get('[data-cy=SliderControlProgressBar]')
			.should('have.css', 'left', '0px')
			.and('have.css', 'right', '100px');
		cy.get('[data-cy=SliderControlTrackBar]')
			.should('have.css', 'right', '0px')
			.and('have.css', 'left', '0px');

		// Style after setting a value
		cy.get('[data-cy=SliderControl] > div').trigger('mousedown', 100, 0, {
			force: true,
		});
		cy.get('[data-cy=SliderControlProgressBar]')
			.should('have.css', 'left', '0px')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');
		cy.get('[data-cy=SliderControlTrackBar]')
			.should('have.css', 'right', '0px')
			.and('have.css', 'left', '100px');

		cy.get('[data-cy=SliderControl] > div').trigger('mouseover', 100, 0, {
			force: true,
		});
		cy.get('[data-cy=SliderControlProgressBar]')
			.should('have.css', 'left', '0px')
			.and('have.css', 'background-color', 'rgb(18, 76, 177)');
	});
});
