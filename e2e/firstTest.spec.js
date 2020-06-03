describe('Example', () => {
  before(async () => {
    console.log('hi3');
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
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    console.log('does it come here?');
    expect(element(by.id('step_1'))).toBeVisible();
  });
});
