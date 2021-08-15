import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.sass']
})
export class WordCounter {

  @Input() maxCount: number;
  @Input() counter: number;
  warningLimit = 0.75;

}


