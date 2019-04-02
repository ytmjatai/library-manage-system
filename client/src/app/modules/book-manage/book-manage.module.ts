import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManageRoutingModule } from './book-manage-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    BookManageRoutingModule
  ],
  declarations: [ListComponent]
})
export class BookManageModule { }
