import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getQuoteBox(): Promise<string> {
    let quoteBox: ElementFinder = element(by.css('app-root app-quote-box #quote-box'));
    let quoteBoxContent: string = await quoteBox.getText();
    return quoteBoxContent;
  }

  async getQuoteBoxText(): Promise<string> {
    let quoteBoxText: ElementFinder = element(by.css('app-root app-quote-box #quote-box #text'));
    let quoteBoxTextContent: string = await quoteBoxText.getText();
    return quoteBoxTextContent;
  }

  async getQuoteBoxAuthor(): Promise<string> {
    let quoteBoxAuthor: ElementFinder = element(by.css('app-root app-quote-box #quote-box #author'));
    let quoteBoxAuthorContent: string = await quoteBoxAuthor.getText();
    return quoteBoxAuthorContent;
  }

  async getNewQuoteButtonText(): Promise<string> {
    let newQuoteButton: ElementFinder = element(by.css('app-root app-quote-box #quote-box .btn-row #new-quote'));
    let newQuoteButtonText: string = await newQuoteButton.getText();
    return newQuoteButtonText;
  }

  async getTweetButtonText(): Promise<string> {
    let tweetButton: ElementFinder = element(by.css('app-root app-quote-box #quote-box .btn-row #tweet-quote'));
    let tweetButtonText: string = await tweetButton.getText();
    return tweetButtonText;
  }

  async clickQuoteButton(): Promise<void> {
    let newQuoteButton: ElementFinder = element(by.css('app-root app-quote-box #quote-box .btn-row #new-quote'));
    await newQuoteButton.click();
  }

  async clickTweetButton(): Promise<void> {
    let tweetButton: ElementFinder = element(by.css('app-root app-quote-box #quote-box .btn-row #tweet-quote'));
    await tweetButton.click();
  }

  async getTweetURL(): Promise<string> {
    let tweetButton: ElementFinder = element(by.css('app-root app-quote-box #quote-box .btn-row #tweet-quote'));
    let tweetButtonURL = await tweetButton.getAttribute('href');
    return tweetButtonURL;
  }

  async getHtmlElementBounds() {
    let htmlElement: ElementFinder = element(by.tagName('html'));
    let htmlElementSize: { width: number, height: number } = await htmlElement.getSize();
    let htmlElementLocation: { x: number, y: number } = await htmlElement.getLocation();
    let htmlElementBounds: { x0: number, x1: number } = {
      x0: htmlElementLocation.x,
      x1: htmlElementLocation.x + htmlElementSize.width
    };
    return htmlElementBounds;
  }

  async getQuoteBoxBounds() {
    let quoteBox: ElementFinder = element(by.css('app-root app-quote-box #quote-box'));
    let quoteBoxSize: { width: number, height: number } = await quoteBox.getSize();
    let quoteBoxLocation: { x: number, y: number } = await quoteBox.getLocation();
    let quoteBoxBounds: { x0: number, x1: number } = {
      x0: quoteBoxLocation.x,
      x1: quoteBoxLocation.x + quoteBoxSize.width,
    };
    return quoteBoxBounds;
  }
}
