module.exports = {
  types: [
    {
      value: 'feat',
      name: 'Feature - A new feature for End Users',
    },
    {
      value: 'fix',
      name: 'Fix - A bug fix affecting End Users',
    },
    {
      value: 'test',
      name: 'Test - adding missing tests or correcting existing tests',
    },
    {
      value: 'build',
      name: 'Build - Changes to build/release/lint/test/editor scripts or other local developer tooling',
    },
    {
      value: 'style',
      name: 'Style - Changes to whitespace, formatting, lint fixes, missing semicolons, etc',
    },
    {
      value: 'refactor',
      name: 'Refactor - An improvement to the design of existing code without changing its external behavior',
    },
    {
      value: 'docs',
      name: 'Docs - Changes to Markdown or other Documentation',
    },
    {
      value: 'chore',
      name: 'Chore - Other housekeeping changes that do not modify src or test files',
    },
    {
      value: 'revert',
      name: 'Revert - Reverts a previous commit',
    },
  ],
  messages: {
    type: 'What kind of change did you make?',
    scope: 'Which category does the change most relate to?',
    subject: 'Complete the sentence "This Commit will...',
    body: 'Give context with some extra background info (optional)\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'Which issue does this relate to? e.g. #469',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  scopes: [
    {
      name: 'platform',
    },
    {
      name: 'toolkit-ui',
    },
    {
      name: 'toolkit-core',
    },
    {
      name: 'preview',
    },
    {
      name: 'readme',
    },
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
  allowCustomScopes: true,
  footerPrefix: 'Closes:',
};
