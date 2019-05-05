import { Component, OnInit } from '@angular/core';
import { DataService, CategoryModel } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id: string;
  model: CategoryModel = {};
  parentName = '顶级分类';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSvc: DataService,
    public addSvc: AddService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!!this.id) {
      const category = await this.dataSvc.queryById(this.id);
      this.parentName = category.name;
      this.model.parentId = category._id;
    }
  }

  public categoryChange(category: CategoryModel) {
    this.model._id = category._id;
  }

  public async submit() {
    await this.dataSvc.add(this.model);
    this.dataSvc.pullCategories$();
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  public cancel() {

  }

}
