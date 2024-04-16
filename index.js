const core = require('@actions/core');
try {
  const name = core.getInput('name');
  core.notice(`This is the provided name: ${name}.`);
  core.setOutput("greeting", `Good day, ${name}`);
} catch (error) {
  core.setFailed(error.message);
}