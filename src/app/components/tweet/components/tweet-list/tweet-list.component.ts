import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.sass']
})
export class TweetListComponent implements OnInit {
  constructor(private tweetService: TweetService) { }

  tweet$: Observable<string[]>;

  ngOnInit() {
    this.tweet$ = this.tweetService.tweetList;
  }

  remove(index: number) {
    this.tweetService.removeTweet(index);
  }
}


