import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WordCounter } from './components/counter/word-counter.component';
import { TweetBoxComponent } from './components/tweet-box/tweet-box.component';

@NgModule({
  declarations: [
    TweetBoxComponent,
    WordCounter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TweetBoxComponent,
    WordCounter
  ]
})
export class TweetModule { }
