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
  wordCount: number = 0;
  textArea: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    fromEvent(this.inputEl.nativeElement, 'keyup').pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
      tap((next: any) => {
        console.log(next);
        this.textArea = next.target.value;
        let text = this.textArea.trim().replace(/\s+/g, ' ');
        let words = text.split(' ');
        let trueWords: any[] = [];

        words.forEach(word => {
          if ((/^[\W]*[\w]+[\W]*$/).test(word)) {
            trueWords.push(word);
          }
        });

        this.wordCount = trueWords.length;
        console.log(trueWords, text);
      })

    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}


