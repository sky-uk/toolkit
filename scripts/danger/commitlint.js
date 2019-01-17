const config = require('@commitlint/config-conventional');
const lint = require('@commitlint/lint');

const review = api => {
  const { danger, fail, schedule } = api;

  const withBackticks = value => `\`${value}\``;

  const getFailures = report =>
    report.filter(result => !result.valid).map(({ errors, input }) => ({
      errors: errors.map(({ message }) => withBackticks(message)),
      input: withBackticks(input),
    }));

  const writeFailures = failures =>
    failures.forEach(({ errors, input }) => fail(`${input} is invalid because ${errors.join(', ')}`));

  const writeResult = failures => {
    if (failures.length > 0) {
      writeFailures(failures);
    }
  };

  danger.github.commits
    .filter(meta => !meta.commit.message.startsWith('Merge'))
    .filter(meta => !meta.commit.message.startsWith('Publish'));

  schedule(
    Promise.all(danger.github.commits.map(meta => lint(meta.commit.message, config.rules)))
      .then(getFailures)
      .then(writeResult)
      .catch(err => err)
  );
};

module.exports = {
  review,
};
