**Issue:** #000000

See issue for details on this merge request.

---

**Merge Request Tasks:**

- [x] Completed task
- [ ] Incomplete task
  - [ ] Sub-task 1
  - [x] Sub-task 2
  - [ ] Sub-task 3

---

**Merge Request Checklist:**

Please review this on every MR and check the tasks that you did/verified for this MR's

Maintenance:

- [ ] - Run `upgrade-all-packages-and-install` npm script.

Component(s):

- [ ] - Make sure the component has the correct prop types, display name, and default props (minimally `data-cypress` value)
- [ ] - Decide which [styled-system](https://styled-system.com/) props your component will inherit.

NPM Packages(s):

- [ ] - Make sure the `package.json` has the correct properties and verify your package being published has the correct dependencies in its `package.json` (i.e. the packages you've imported into you component)
- [ ] - Continually Pull `dev` branch into your MR and verify the component has the correct version number. Someone else might have bump version while you've been working on your branch.
    Use semantic version:
    Given a version number MAJOR.MINOR.PATCH, increment the:
  1. MAJOR version when you make incompatible API changes
  2. MINOR version when you add functionality in a backwards compatible manner
  3. PATCH version when you make backwards compatible bug fixes.
- [ ] - Publish package(s) to npm if needed

Storybook & Stories:

- [ ] - Add storybook stories that identify the different states of the component based on component props, lack of props, or props errors. Remember, stories are about props and testing those props using cypress.
- [ ] - Update stories with correct Figma link to the component specification.

Component Documentation:

- [ ] - Verify documentation has the correct title, description, npm details (i.e. version and yarn/npm command)
- [ ] - Create external code demo for documentation using [https://codesandbox.io/](https://codesandbox.io/) to smoke test packages.
- [ ] - Create React props table (i.e. the component interface) and make sure you indicate which ones are required
- [ ] - Verify the documentation contains the correct Component Common Styling Props (based on which [styled-system](https://styled-system.com/) props you used)
- [ ] - After the component is published verify external code editor is working correctly

Manually Testing:

- [ ] - If relevant review the component specification in Figma and verify you have built the component to specification. Discuss any questions with the Design Team.
- [ ] - Check accessibility warnings in storybook for the component
- [ ] - Manually test component in the supported browser/OS via [https://www.lambdatest.com](https://www.lambdatest.com).

Automated Testing:

- [ ] - Write Cypress tests for each of the component stories
