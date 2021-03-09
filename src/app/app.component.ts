import { Component, OnInit } from '@angular/core';
import { QuoteService } from './service/quote.service';
import { Quote } from './interface/Quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  quote!: Quote;
  tweetURL!: string;

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
    this.getNewQuote();
  }

  async getNewQuote() {
    await this.quoteService.fetchData();
    this.quoteService.getNewQuote();
    this.quote = this.quoteService.getQuote();
    this.tweetURL = this.quoteService.getTweetURL();
    this.loading = false;
  }
}
