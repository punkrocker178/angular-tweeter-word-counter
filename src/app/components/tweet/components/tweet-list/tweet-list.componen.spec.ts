import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetListComponent } from './tweet-list.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TweetListComponent]});
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
