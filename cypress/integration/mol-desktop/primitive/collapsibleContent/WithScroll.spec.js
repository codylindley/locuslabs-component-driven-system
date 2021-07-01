describe('Collapsible Content Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Collapsible Content',
			'WithScroll'
		);
	});

	it('Drop shadow appears when content is scrolled', () => {
		cy.get('[data-cy=InnerContent] [data-cy=Box]').eq(0).scrollTo('bottom');
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=InnerContent]').then(($els) => {
			// get Window reference from element
			const win = $els[0].ownerDocument.defaultView;
			// use getComputedStyle to read the pseudo selector
			const before = win.getComputedStyle($els[0], 'before');
			// read the value of the `content` CSS property
			const contentValue = before.getPropertyValue('display');
			// the returned value will have double quotes around it, but this is correct
			expect(contentValue).to.eq('block');
		});
		cy.get('[data-cy=InnerContent] [data-cy=Box]').eq(0).scrollTo('top');
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy=InnerContent]').then(($els) => {
			// get Window reference from element
			const win = $els[0].ownerDocument.defaultView;
			// use getComputedStyle to read the pseudo selector
			const before = win.getComputedStyle($els[0], 'before');
			// read the value of the `content` CSS property
			const contentValue = before.getPropertyValue('display');
			// the returned value will have double quotes around it, but this is correct
			expect(contentValue).to.eq('none');
		});
	});

	it('CollapsibleContent does not overflow container', () => {
		cy.get('[data-cy=CollapsibleContent]').should(
			'have.css',
			'height',
			'360px'
		);
	});

	it('Content can be collapsed and expanded with CollapseButton click', () => {
		cy.get('[data-cy=InnerContent]').should('be.visible');
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=InnerContent]').should('be.hidden');
		cy.get('[data-cy=CollapseButton]').click({ force: true });
		cy.get('[data-cy=InnerContent]').should('be.visible');
	});
});
