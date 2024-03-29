import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService, CategoryModel } from '../services/data.service';
import { ListService } from './list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories$: Observable<CategoryModel[]>;
  constructor(
    private dataSvc: DataService,
    public listSvc: ListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categories$ = this.dataSvc.categories$;
    this.dataSvc.pullCategories$();
  }

  public itemClick(category: CategoryModel) {
    if (this.listSvc.category && this.listSvc.category._id === category._id) {
      this.listSvc.category = null;
      return;
    }
    this.listSvc.category = category;
  }

  public add() {
    if (!this.listSvc.category) {
      this.router.navigate(['add'], { relativeTo: this.route });
      return;
    }
    this.router.navigate(
      ['add', { id: this.listSvc.category._id }],
      { relativeTo: this.route }
    );
  }

  public async delete() {
    if (!this.listSvc.category) {
      alert('请选择要删除的分类');
    }
    const id = this.listSvc.category._id;
    try {
      await this.dataSvc.delete(id);
      this.listSvc.category = null;
      this.dataSvc.pullCategories$();
    } catch (error) {
      console.error(error);
      console.log('删除失败');
    }
  }

  public edit() {
    const category = this.listSvc.category;
    if (!category) {
      alert('请选择要修改的分类');
      return;
    }
    this.router.navigate(
      ['edit', { category: JSON.stringify(category) }],
      { relativeTo: this.route }
    );
  }

  public reflesh() {
    this.dataSvc.pullCategories$();
  }


}
