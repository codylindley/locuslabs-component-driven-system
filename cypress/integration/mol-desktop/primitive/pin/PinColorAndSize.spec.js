describe('Pin Component', () => {
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
			'MOL Components/Desktop/Primitive Components/Pin',
			'PinColorAndSize'
		);
	});

	it('Story: Pin Color And Size - small pin has correct icon color', () => {
		cy.get('[data-cy=Pin]:eq(0) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'red');
	});

	it('Story: Pin Color And Size - small pin has correct colors', () => {
		cy.get('[data-cy=Pin]:eq(0) [data-cy=Box]:eq(0)  svg path:eq(1) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'white');
		cy.get('[data-cy=Pin]:eq(0) [data-cy=Box]:eq(0)  svg path:eq(2) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'red');
	});

	it('Story: Pin Color And Size - small pin and icon is correct size', () => {
		cy.get('[data-cy=Pin]:eq(0) [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px');
		cy.get('[data-cy=Pin]:eq(0) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '47px')
			.and('have.css', 'width', '34px');
	});

	it('Story: Pin Color And Size - large pin has correct icon color', () => {
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'white');
	});

	it('Story: Pin Color And Size - large pin has correct colors', () => {
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Box]:eq(0)  svg path:eq(1) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'purple');
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Box]:eq(0)  svg path:eq(2) ')
			.should('exist') // is in dom
			.and('have.attr', 'fill', 'white');
	});

	it('Story: Pin Color And Size - large pin and icon is correct size', () => {
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '56px')
			.and('have.css', 'width', '42px');
		cy.get('[data-cy=Pin]:eq(1) [data-cy=Icon] svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '40px')
			.and('have.css', 'width', '40px');
	});
});
