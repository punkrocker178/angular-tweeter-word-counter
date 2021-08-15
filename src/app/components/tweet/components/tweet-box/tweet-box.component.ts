import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.sass']
})
export class TweetBoxComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly MAXIMUM_WORDS_ALLOWED = 50;
  @ViewChild('tweetInput') inputEl: ElementRef;
  destroy$: Subject<boolean> = new Subject();

  isLoading: boolean;
  wordRegex = /^[\W]*[\w]+[\W]*$/;
  wordCount: number = 0;
  textValue: string;

  tweetList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    fromEvent(this.inputEl.nativeElement, 'keyup').pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      tap((next: any) => {
        this.isLoading = true;
        this.countWord(next);
      })

    ).subscribe(_ => {
      setTimeout(() => this.isLoading = false, 400);
    });
  }

  countWord(event: any) {
    const textAreaValue = event.target.value;
    let text = textAreaValue.trim().replace(/\s+/g, ' ');
    let words = text.split(' ');
    let trueWords: any[] = [];

    words.forEach((word: string) => {
      if (this.wordRegex.test(word)) {
        trueWords.push(word);
      }
    });

    this.wordCount = trueWords.length;
  }

  tweet() {
    this.tweetList.push(this.textValue);
    this.textValue = '';
    this.wordCount = 0;
    
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}


