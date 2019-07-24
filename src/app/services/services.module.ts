import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from './data/fetch.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    FetchService,
  ]
})
export class ServicesModule { }
