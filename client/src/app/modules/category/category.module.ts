import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';

import { CategoryRoutingModule } from './category-routing.module';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    CategoryRoutingModule
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SliderComponent,
  ]
})
export class CategoryModule { }
