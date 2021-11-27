import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PassengerDataService } from '../api/passenger-data.service';
import { PaginationModule } from './pagination/pagination.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    PassengerDataService
  ]
})
export class MainModule { }
