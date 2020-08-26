import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pet Owners');
  });

  it('should display Male', () => {
    expect(page.getGenderTitle('Male')).toEqual('Male');
  });

  it('should display Female', () => {
    expect(page.getGenderTitle('Female')).toEqual('Female');
  });

  it('should count number of pets', () => {
    const list = page.getListItem();
    expect(list.count()).toBe(7);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
