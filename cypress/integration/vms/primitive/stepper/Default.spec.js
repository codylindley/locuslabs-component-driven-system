/// <reference types="cypress" />
describe('Stepper Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Stepper', 'Default');
	});

	const checkBackgroundStyles = (index, isActive) => {
		const color = isActive ? 'rgb(18, 76, 177)' : 'rgb(249, 249, 249)';

		cy.get('[data-cy=Step]')
			.eq(index)
			.children('[data-cy=CircleButton]')
			.should('have.css', 'background-color', color);
	};

	const checkBadgeStyles = (index, isVisible) => {
		cy.get('[data-cy=Step]')
			.eq(index)
			.children('[data-cy=Badge]')
			.should(isVisible ? 'exist' : 'not.exist');
	};

	const checkConnectorLineStyles = (index, isVisible, isActive) => {
		if (isVisible) {
			const color = isActive ? 'rgb(11, 59, 142)' : 'rgb(235, 235, 235)';
			cy.get('[data-cy=StepContainer]')
				.eq(index)
				.children('[data-cy=ConnectorLine]')
				.should('have.css', 'border-color', color);
		} else {
			cy.get('[data-cy=StepContainer]')
				.eq(index)
				.children('[data-cy=ConnectorLine]')
				.should('not.exist');
		}
	};

	const checkTooltip = (index) => {
		cy.get(
			`[data-cy=StepContainer]:eq(${index}) [data-cy=TooltipTrigger]`
		).trigger('mouseover');
		cy.get('[data-cy=Tooltip]').should('be.visible');
		cy.get('[data-cy=Tooltip]').should('contain.text', `Item ${index + 1}`);
	};

	const checkIsCompleted = (index) => {
		checkConnectorLineStyles(index, index > 0, true);
		checkBadgeStyles(index, true);
		checkBackgroundStyles(index, true);
	};

	const checkIsActive = (index) => {
		checkConnectorLineStyles(index, index > 0, true);
		checkBadgeStyles(index, false);
		checkBackgroundStyles(index, true);
	};

	const checkIsInactive = (index) => {
		checkConnectorLineStyles(index, index > 0, false);
		checkBadgeStyles(index, false);
		checkBackgroundStyles(index, false);
	};

	it('Default', () => {
		checkIsCompleted(0);
		checkIsCompleted(1);
		checkIsActive(2);
		checkIsInactive(3);

		checkTooltip(0);
		checkTooltip(1);
		checkTooltip(2);
		checkTooltip(3);
	});
});
