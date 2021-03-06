const detox = require('detox');
const adapter = require('detox/runners/mocha/adapter');

before(async function() {
  await detox.init(undefined, {launchApp: false});
});

beforeEach(async function() {
  await adapter.beforeEach(this);
});

afterEach(async function() {
  await adapter.afterEach(this);
});

after(async function() {
  await detox.cleanup();
});
