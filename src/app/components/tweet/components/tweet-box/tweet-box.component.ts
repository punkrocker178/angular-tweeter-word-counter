import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TweetBoxComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly MAXIMUM_WORDS_ALLOWED = 50;
  @ViewChild('tweetInput') inputEl: ElementRef;
  @ViewChild('tweetInput2') inputEl2: ElementRef;
  @ViewChild('btn') buttonEl: ElementRef;

  destroy$: Subject<boolean> = new Subject();

  isLoading: boolean;
  wordRegex = /^[\W]*[\w]+[\W]*$/;
  wordCount: number = 0;
  charCount: number = 0;
  textValue: string;

  constructor(private tweetService: TweetService) { }

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
      setTimeout(() => this.isLoading = false, 300);
    });

    this.inputEl2.nativeElement.addEventListener('keyup', (event: any) => {
      setTimeout(() => {
        if (event.code === 'ArrowUp' || event.code === 'ArrowRight' ||
          event.code === 'ArrowDown' || event.code === 'ArrowLeft') {
          return;
        }
        this.countChar(event);
      })
    });
  }

  countChar(event: any) {
    const textArea = event.target;
    const content = textArea.textContent;
    let text = content?.replace(/\s+/g, '');
    this.charCount = text?.length;

    if (this.charCount >= this.MAXIMUM_WORDS_ALLOWED) {
      let normal = textArea.textContent.substring(0, this.MAXIMUM_WORDS_ALLOWED - 1);
      let highlight = textArea.textContent.substring(this.MAXIMUM_WORDS_ALLOWED - 1);
      const innerHTML = `${normal}<span class="highlight">${highlight}</span>`;
      this.inputEl2.nativeElement.innerHTML = innerHTML;
      this.setEndCaret();
    }
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
    this.tweetService.addTweet = this.textValue;
    this.textValue = '';
    this.wordCount = 0;

  }

  tweet2() {
    if (!this.inputEl2.nativeElement.textContent) {
      this.tweetService.addTweet = 'a';
    } else {
      this.tweetService.addTweet = this.inputEl2.nativeElement.textContent;
    }

    this.inputEl2.nativeElement.textContent = '';
    this.charCount = 0;
  }


  /* Reference: https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser/4238971#4238971 */
  setEndCaret() {
    let range = document.createRange();
      
    // Select all content
    range.selectNodeContents(this.inputEl2.nativeElement);
    
    // Collapse caret: Make start caret go to end caret
    range.collapse(false);
    let selection = window.getSelection();
    
    // Remove all other selections
    selection?.removeAllRanges();

    // Select the collapse caret
    selection?.addRange(range);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}


