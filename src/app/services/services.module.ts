import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from './data/fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

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
    AuthService
  ]
})
export class ServicesModule { }
