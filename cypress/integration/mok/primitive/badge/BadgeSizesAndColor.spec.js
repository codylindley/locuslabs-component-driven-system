describe('Badge Component', () => {
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
			'MOK Components/Primitive Components/Badge',
			'BadgeSizesAndColor'
		);
	});

	it('Story: Badge Sizes And Color - md', () => {
		cy.get('[data-cy=Badge]:eq(0) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '32px')
			.and('have.css', 'width', '32px');
		cy.get('[data-cy=Badge]:eq(0) [data-cy=Box]:eq(0) svg path')
			.should('exist') // is in dom
			.and('have.attr', 'stroke', 'white')
			.and('have.attr', 'fill', 'green');
		cy.get('[data-cy=Badge]:eq(0) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'white');
	});

	it('Story: Badge Sizes And Color - lg', () => {
		cy.get('[data-cy=Badge]:eq(1) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '36px')
			.and('have.css', 'width', '36px');
		cy.get('[data-cy=Badge]:eq(1) [data-cy=Box]:eq(0) svg path')
			.should('exist') // is in dom
			.and('have.attr', 'stroke', 'orange')
			.and('have.attr', 'fill', 'white');
		cy.get('[data-cy=Badge]:eq(1) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'orange');
	});

	it('Story: Badge Sizes And Color - xl', () => {
		cy.get('[data-cy=Badge]:eq(2) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '48px')
			.and('have.css', 'width', '48px');
		cy.get('[data-cy=Badge]:eq(2) [data-cy=Box]:eq(0) svg path')
			.should('exist') // is in dom
			.and('have.attr', 'stroke', 'gray')
			.and('have.attr', 'fill', 'white');
		cy.get('[data-cy=Badge]:eq(2) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'blue');
	});

	it('Story: Badge Sizes And Color - xxl', () => {
		cy.get('[data-cy=Badge]:eq(3) [data-cy=Box]:eq(0) svg')
			.should('exist') // is in dom
			.and('have.css', 'height', '64px')
			.and('have.css', 'width', '64px');
		cy.get('[data-cy=Badge]:eq(3) [data-cy=Box]:eq(0) svg path')
			.should('exist') // is in dom
			.and('have.attr', 'stroke', 'white')
			.and('have.attr', 'fill', 'black');
		cy.get('[data-cy=Badge]:eq(3) [data-cy=Icon]')
			.should('exist') // is in dom
			.and('have.attr', 'color', 'white');
	});
});
