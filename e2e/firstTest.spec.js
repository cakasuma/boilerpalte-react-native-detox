describe('Example', function() {
  before(async function() {
    await device.launchApp({
      newInstance: true,
      launchArgs: {detoxPrintBusyIdleResources: 'YES'},
      permissions: {
        notifications: 'YES',
        location: 'always',
      },
    });
  });

  beforeEach(async function() {
    await device.reloadReactNative();
  });

  it('step 1 exists', async function() {
    await expect(element(by.id('step_1'))).toBeVisible();
  });
  it('debug exists', async function() {
    await expect(element(by.id('debug'))).toBeVisible();
  });
});
