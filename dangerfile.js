const { danger, fail, markdown, message, peril, schedule, warn } = require('danger');
const globby = require('globby');

(async () => {
  const api = { danger, fail, markdown, message, peril, schedule, warn };
  const dangerFiles = await globby(['./scripts/danger/*']);
  dangerFiles.forEach(dangerFile => require(dangerFile).review(api));
})();
