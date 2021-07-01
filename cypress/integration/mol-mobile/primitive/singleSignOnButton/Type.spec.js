describe('Sign On Button', () => {
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
			'MOL Components/Mobile/Primitive Components/Single Sign On Button',
			'Type'
		);
	});

	it('Type', () => {
		cy.get('[data-cy=SingleSignOnButton]:eq(0)').should(
			'have.text',
			'Sign in with SSO'
		);
		cy.get('div[data-cy=Icon]:eq(0)').should('have.attr', 'name', 'lock');
		cy.get('[data-cy=SingleSignOnButton]:eq(1)').should(
			'have.text',
			'Sign in with Facebook'
		);
		cy.get('div[data-cy=Icon]:eq(1)').should(
			'have.attr',
			'name',
			'social.facebook.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(2)').should(
			'have.text',
			'Sign in with Microsoft'
		);
		cy.get('div[data-cy=Icon]:eq(2)').should(
			'have.attr',
			'name',
			'social.microsoft.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(3)').should(
			'have.text',
			'Sign in with GitHub'
		);
		cy.get('div[data-cy=Icon]:eq(3)').should(
			'have.attr',
			'name',
			'social.github.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(4)').should(
			'have.text',
			'Sign in with Twitter'
		);
		cy.get('div[data-cy=Icon]:eq(4)').should(
			'have.attr',
			'name',
			'social.twitter.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(5)').should(
			'have.text',
			'Sign in with Google'
		);
		cy.get('div[data-cy=Icon]:eq(5)').should(
			'have.attr',
			'name',
			'social.google.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(6)').should(
			'have.text',
			'Sign in with Dropbox'
		);
		cy.get('div[data-cy=Icon]:eq(6)').should(
			'have.attr',
			'name',
			'social.dropbox.color'
		);
		cy.get('[data-cy=SingleSignOnButton]:eq(7)').should(
			'have.text',
			'Sign in with Linkedin'
		);
		cy.get('div[data-cy=Icon]:eq(7)').should(
			'have.attr',
			'name',
			'social.linkedin.color'
		);
	});
});
