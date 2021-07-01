describe('CodeSandbox demo tests:', () => {
	before(() => {
		// change default command timeout to 30s
		Cypress.config('defaultCommandTimeout', 30000);
	});

	const paths = Cypress.env('filePaths').split(';');

	paths.forEach((filePath) => {
		it(
			filePath +
				': open codesandbox preview, verify UI component is in demo, otherwise something went wrong',
			() => {
				// the url below loads a codesandbox preview with no iframe
				// url is codesandbox id followed by .csb.app/?standalone
				cy.readFile(filePath).then((json) => {
					const id = json.codeSandboxId.split('-').pop(); // get codesandbox ID
					cy.visit(`https://${id}.csb.app/?standalone`, {
						timeout: 60000,
					}).then(() => {
						cy.get('[data-cy]').should('exist');
					});
				});
			}
		);
	});
});
