import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TweetService {
    private _tweetSubject: BehaviorSubject<string[]> = new BehaviorSubject(['']);

    get tweetList() {
        return this._tweetSubject.asObservable();
    }

    set addTweet(tweet: string) {
        const currentTweets = this._tweetSubject.getValue();
        this._tweetSubject.next([...currentTweets, tweet]);
    }

    removeTweet(index: number) {
        let currentTweets = this._tweetSubject.getValue();
        currentTweets.splice(index, 1);
        this._tweetSubject.next(currentTweets);
    }
}