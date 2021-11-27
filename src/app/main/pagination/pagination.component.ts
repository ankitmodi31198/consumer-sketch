import { Component, Input, OnInit, Output } from '@angular/core';
import { PaginationConfig } from './pagination.config';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  config: PaginationConfig = new PaginationConfig();

  constructor() { }

  ngOnInit(): void {
  }

  firstClickHandler() {
    this.config.firstPageClickHandler();
  }

  previousClickHandler() {
    this.config.previousClickHandler();
  }

  nextClickHandler() {
    this.config.nextClickHandler();
  }

  lastClickHandler() {
    this.config.lastClickHandler();
  }


}
