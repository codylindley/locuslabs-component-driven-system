describe('Search Input Component', () => {
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
			'MOL Components/Desktop/Domain Components/Search/Subcomponents/Search Input',
			'WithSearchTerm'
		);
	});

	it('Input has correct value', () => {
		cy.get('[data-cy=SearchInput] input').invoke('val').should('equal', 'coff');
	});

	it('Search Input displays as active', () => {
		cy.get('[data-cy=SearchButton]').should('not.be.exist');
		cy.get('[data-cy=BackButton]').should('be.visible');
		cy.get('[data-cy=ClearButton]').should('be.visible');
	});

	it('Input gets cleared when close icon is clicked', () => {
		cy.get('[data-cy=ClearButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('have.focus');
	});

	it('Input gets cleared when back icon is clicked', () => {
		cy.get('[data-cy=BackButton]').click({ force: true });
		cy.get('[data-cy=SearchInput] input').invoke('val').should('be.empty');
		cy.get('[data-cy=SearchInput] input').should('not.have.focus');
	});
});
