import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PassengerGetModel } from '../models/passenger.model';

@Injectable()
export class PassengerDataService {
  baseUrl: string;

  constructor(
    protected httpClient: HttpClient,
    protected injector: Injector
  ) {
    this.baseUrl = environment.baseUrl;
  }

  get(queryParams?: { [key: string]: any }, subPath?: string): Observable<any> {
    subPath = subPath || '';
    const url = this.baseUrl + subPath;
    return this.httpClient.get<any>(url, { params: queryParams });
  }

  getPassengerData(queryParams: { [key: string]: any }): Observable<PassengerGetModel> {
    const subPath: string = 'passenger';
    return this.get(queryParams, subPath);
  }
}
