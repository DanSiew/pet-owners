import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('petTitle')).getText() as Promise<string>;
  }

  getGenderTitle(gender: string): Promise<string> {
    return element(by.id(gender)).getText() as Promise<string>;
  }

  getListItem() {
    return element.all(by.css('.flight-details-list li'));
  }
}
