import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TweetBoxModule } from './components/tweet/components/tweet-box/tweet-box.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TweetBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
