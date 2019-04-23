import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BookManageRoutingModule } from './book-manage-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    BookManageRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ListComponent,
    AddComponent
  ]
})
export class BookManageModule { }
