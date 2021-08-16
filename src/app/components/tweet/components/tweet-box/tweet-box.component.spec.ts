import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TweetService } from 'src/app/services/tweet.service';
import { WordCounter } from '../counter/word-counter.component';

import { TweetBoxComponent } from './tweet-box.component';

describe('TweetBoxComponent', () => {
  let component: TweetBoxComponent;
  let fixture: ComponentFixture<TweetBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetBoxComponent, WordCounter ],
      providers: [TweetService]
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

  it(`should count string "The quick brown fox jumps over the lazy dog" correctly 9 words `, waitForAsync (() => {

    const textArea: HTMLTextAreaElement  = fixture.nativeElement.querySelector('[data-test="tweet-area"]');
    textArea.value = 'The quick brown fox jumps over the lazy dog';
    textArea.dispatchEvent(new Event('keyup'));
    const counter: HTMLElement = fixture.nativeElement.querySelector('[data-test="word-counter"]');
    
    fixture.whenStable().then(val => {
      fixture.detectChanges();
      expect(counter.innerText).toBe('9');
    });
    
  }));

  it(`should count string "The   brown   jumps   the lazy  !" correctly 5 words `, waitForAsync (() => {

    const textArea: HTMLTextAreaElement  = fixture.nativeElement.querySelector('[data-test="tweet-area"]');
    textArea.value = 'The   brown   jumps   the lazy  !';
    textArea.dispatchEvent(new Event('keyup'));
    const counter: HTMLElement = fixture.nativeElement.querySelector('[data-test="word-counter"]');
    
    fixture.whenStable().then(val => {
      fixture.detectChanges();
      expect(counter.innerText).toBe('5');
    });
    
  }));


});
