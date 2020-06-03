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
    console.log('hi4');
  });

  beforeEach(async function() {
    await device.reloadReactNative();
  });

  it('step 1 exists', async function() {
    expect(element(by.id('step_1'))).toBeVisible();
  });
  it('debug exists', async function() {
    expect(element(by.id('debug'))).toBeVisible();
  });
});
