import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'book-manage',
    loadChildren: './modules/book-manage/book-manage.module#BookManageModule'
  },
  {
    path: 'category',
    loadChildren: './modules/category/category.module#CategoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
