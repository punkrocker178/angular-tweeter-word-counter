import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WordCounter } from '../counter/word-counter.component';
import { TweetBoxComponent } from './tweet-box.component';

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
export class TweetBoxModule { }
