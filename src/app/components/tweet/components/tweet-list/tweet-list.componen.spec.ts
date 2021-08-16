import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetService } from 'src/app/services/tweet.service';
import { TweetListComponent } from './tweet-list.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TweetListComponent], providers: [TweetService] });
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
