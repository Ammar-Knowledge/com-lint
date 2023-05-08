// Ours
const { Octokit, App } = require("octokit");
const commitlint = require("./lib/lint");

module.exports = app => {
  // For more information on building apps:
  // https://probot.github.io/docs/
  app.on("pull_request.opened", commitlint);
  app.on("pull_request.synchronize", commitlint);
};
