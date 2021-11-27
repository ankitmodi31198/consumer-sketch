import { Component, OnInit } from '@angular/core';
import { PassengerDataService } from '../api/passenger-data.service';
import { finalize, take } from 'rxjs/operators';
import { PassengerGetModel } from '../models/passenger.model';
import { PaginationConfig } from './pagination/pagination.config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  passengerData: PassengerGetModel = null;

  currentPage: number = 1;

  paginationConfig: PaginationConfig = new PaginationConfig();

  constructor(
    private passengerDataService: PassengerDataService
  ) {
    this.setPaginationConfig();
    this.getPassengerData();
  }

  ngOnInit(): void {

  }

  getPassengerData(page?: number, size?: number) {
    this.markPaginationDisabled();
    this.passengerDataService.getPassengerData({
      page: page ? page : 1,
      size: size ? size : 10
    }).pipe(
      take(1),
      finalize(() => {
        this.markPaginationEnabled();
      }))
      .subscribe((response: PassengerGetModel) => {
        response = new PassengerGetModel().toLocal(response);
        this.passengerData = response;
      })
  }

  firstPageClickHandler(event: boolean) {
    this.getPassengerData(1);
    this.currentPage = 1;
  }

  previousPageClickHandler(event: boolean) {
    this.getPassengerData(--this.currentPage);
  }

  nextPageClickHandler(event: boolean) {
    this.getPassengerData(++this.currentPage);
  }

  lastPageClickHandler(event: boolean) {
    if (this.passengerData) {
      this.getPassengerData(this.passengerData.totalPages);
      this.currentPage = this.passengerData.totalPages;
    }
  }

  setPaginationConfig() {
    this.paginationConfig.isFirstPageDisabled = this.isFirstPage.bind(this);
    this.paginationConfig.isPreviousPageDisabled = this.isFirstPage.bind(this);
    this.paginationConfig.isNextPageDisabled = this.isLastPage.bind(this);
    this.paginationConfig.isLastPageDisabled = this.isLastPage.bind(this);

    this.paginationConfig.firstPageClickHandler = this.firstPageClickHandler.bind(this);
    this.paginationConfig.previousClickHandler = this.previousPageClickHandler.bind(this);
    this.paginationConfig.nextClickHandler = this.nextPageClickHandler.bind(this);
    this.paginationConfig.lastClickHandler = this.lastPageClickHandler.bind(this);

  }

  markPaginationDisabled() {
    this.paginationConfig.isFirstPageDisabled = () => true;
    this.paginationConfig.isLastPageDisabled = () => true;
    this.paginationConfig.isNextPageDisabled = () => true;
    this.paginationConfig.isPreviousPageDisabled = () => true;
  }

  markPaginationEnabled() {
    this.setPaginationConfig();
  }

  isFirstPage(): boolean {
    if (this.currentPage === 1) {
      return true;
    }
    return false;
  }

  isLastPage(): boolean {
    if (this.currentPage && (this.passengerData && this.passengerData.totalPages) && (this.currentPage === this.passengerData.totalPages)) {
      return true;
    }
    return false;
  }

}
