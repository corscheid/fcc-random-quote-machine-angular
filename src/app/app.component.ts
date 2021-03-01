import { Component, OnInit } from '@angular/core';
import { Quote, QuoteList } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading!: boolean;
  quote!: Quote;
  quoteList!: QuoteList;
  tweetURL!: string;
  getNewQuote: () => void = (): void => {
    const idx = Math.floor(Math.random() * this.quoteList.length);
    const newQuote = this.quoteList[idx];
    this.setQuote(newQuote);
  }

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    this.setQuoteList(quotes.quotes);
    this.setQuote(newQuote);
    this.setTweetURL(newQuote);
    this.setLoading(false);
  }

  setQuoteList(quoteList: QuoteList): void {
    this.quoteList = quoteList;
  }

  setQuote(quote: Quote): void {
    this.quote = quote;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  setTweetURL(quote: Quote): void {
    this.tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} --${quote.author}`
  }
}
