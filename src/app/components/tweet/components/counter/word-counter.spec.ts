import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordCounter } from './word-counter.component';

describe('WordCounterComponent', () => {
  let component: WordCounter;
  let fixture: ComponentFixture<WordCounter>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [WordCounter]});
    fixture = TestBed.createComponent(WordCounter);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show warning color', () => {
    component.maxCount = 50;
    component.counter = 41;
    fixture.detectChanges();
    expect(getComputedStyle(fixture.nativeElement.firstElementChild).color).toBe('rgb(255, 255, 0)');
  });

  it('should show danger color', () => {
    component.maxCount = 50;
    component.counter = 50;
    fixture.detectChanges();
    expect(getComputedStyle(fixture.nativeElement.firstElementChild).color).toBe('rgb(255, 0, 0)');
  });
});
