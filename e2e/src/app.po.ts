import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
=======
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
>>>>>>> origin/master
  }
}
