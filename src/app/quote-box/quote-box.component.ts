import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() tweetURL!: string;
  @Output() getNewQuoteClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
}
