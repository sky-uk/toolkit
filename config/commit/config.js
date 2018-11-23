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
  scopes: [
    {
      name: 'core',
    },
    {
      name: 'docs',
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
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
};
