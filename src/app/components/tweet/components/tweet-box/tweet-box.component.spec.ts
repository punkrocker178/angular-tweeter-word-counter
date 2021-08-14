import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WordCounter } from '../counter/word-counter.component';

import { TweetBoxComponent } from './tweet-box.component';

describe('TweetBoxComponent', () => {
  let component: TweetBoxComponent;
  let fixture: ComponentFixture<TweetBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetBoxComponent, WordCounter ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count The quick brown fox jumps over the lazy dog correctly 9 words ', waitForAsync (() => {

    const textArea: HTMLInputElement  = fixture.nativeElement.querySelector('[data-test="tweet-area"]');
    textArea.value = 'The quick brown fox jumps over the lazy dog';
    textArea.dispatchEvent(new Event('keyup'));
    const counter: HTMLSpanElement = fixture.nativeElement.querySelector('[data-test="word-counter"]');
    
    fixture.whenStable().then(val => {
      fixture.detectChanges();
      console.log(counter.innerText);
      expect(counter.innerText).toBe('9');
    });
    
  }));
});
