import { AppPage } from './app.po';
<<<<<<< HEAD
import { browser, logging } from 'protractor';
=======
>>>>>>> origin/master

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to senegocia-test!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
=======
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> origin/master
  });
});
