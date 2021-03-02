import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        QuoteBoxComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render loading text when loading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(app.loading).toBeTrue();
    expect(compiled.querySelector('#loading').textContent).toEqual('loading...');

  });

  it('should render QuoteBoxComponent after loading', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    await app.fetchData();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(app.loading).toBeFalse();
    expect(compiled.querySelector('app-root app-quote-box')).toBeDefined();
  });
});
