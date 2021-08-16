import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WordCounter } from './components/counter/word-counter.component';
import { TweetBoxComponent } from './components/tweet-box/tweet-box.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';

@NgModule({
  declarations: [
    TweetBoxComponent,
    WordCounter,
    TweetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TweetBoxComponent,
    WordCounter,
    TweetListComponent
  ]
})
export class TweetModule { }
