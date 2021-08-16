import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TweetModule } from './components/tweet/tweet.module';
import { TweetService } from './services/tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TweetModule
  ],
  providers: [
    TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
