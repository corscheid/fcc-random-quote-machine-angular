import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  describe('Content', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

    it('should display quote box', async () => {
      await page.navigateTo();
      expect(await page.getQuoteBox()).toBeTruthy();
    });

    it('should display text element inside quote box with random quote', async () => {
      expect(await page.getQuoteBoxText()).toBeTruthy();
    });

    it(`should display author element inside quote box with quote's author`, async () => {
      expect(await page.getQuoteBoxAuthor()).toBeTruthy();
    })

    it('should display "New quote" button inside quote box', async () => {
      expect(await page.getNewQuoteButtonText()).toEqual('New quote');
    });

    it('should display "Tweet" button inside quote box', async () => {
      expect(await page.getTweetButtonText()).toEqual('Tweet');
    });

    it('should fetch new quote when "New quote" button is clicked', async () => {
      const initialQuoteText = await page.getQuoteBoxText();
      await page.clickQuoteButton();
      const newQuoteText = await page.getQuoteBoxText();
      expect(initialQuoteText).toBeTruthy();
      expect(newQuoteText).toBeTruthy();
      expect(newQuoteText).not.toEqual(initialQuoteText);
    });

    it(`should update new quote's author when "New quote" button is clicked`, async () => {
      const initialAuthor = await page.getQuoteBoxAuthor();
      await page.clickQuoteButton();
      const newAuthor = await page.getQuoteBoxAuthor();
      expect(initialAuthor).toBeTruthy();
      expect(newAuthor).toBeTruthy();
      expect(newAuthor).not.toEqual(initialAuthor);
    });

    it('should open Twitter tweet intent when "Tweet" button is clicked', async () => {
      expect(await page.getTweetURL()).toMatch(/^https:\/\/twitter\.com\/intent\/tweet/);
    });

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  })

  describe('Layout', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

    it('should display the quote box in the center horizontally', async () => {
      const htmlElementBounds = await page.getHtmlElementBounds();
      const quoteBoxBounds = await page.getQuoteBoxBounds();
      const left = quoteBoxBounds.x0 - htmlElementBounds.x0;
      const right = htmlElementBounds.x1 - quoteBoxBounds.x1;
      expect(left).toEqual(right);
    });

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  })
});