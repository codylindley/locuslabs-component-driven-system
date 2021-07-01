/// <reference types="cypress" />
describe('Tab Menu Component', () => {
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
		cy.loadStory('VMS Components/Primitive Components/Tab Menu', 'Width');
	});

	const clickTo = (direction) => {
		cy.get(
			`[data-cy=${
				direction === 'left' ? 'LeftOverflowIcon' : 'RightOverflowIcon'
			}]`
		).click({ force: true });
		cy.wait(500); // eslint-disable-line cypress/no-unnecessary-waiting
	};

	it('Width', () => {
		cy.get('[data-cy=RightOverflowIcon]').should(
			'have.css',
			'visibility',
			'hidden'
		);
		cy.get('[data-cy=LeftOverflowIcon]').should(
			'have.css',
			'visibility',
			'visible'
		);

		cy.get('[data-cy=TabMenu]').eq(0).should('have.css', 'width', '300px');

		let c = 3;
		while (c) {
			clickTo('left');
			c--;
		}

		cy.get('[data-cy=RightOverflowIcon]').should(
			'have.css',
			'visibility',
			'visible'
		);

		cy.get('[data-cy=LeftOverflowIcon]').should(
			'have.css',
			'visibility',
			'hidden'
		);
	});
});
