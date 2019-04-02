import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookManageRoutingModule } from './book-manage-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    BookManageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListComponent]
})
export class BookManageModule { }
