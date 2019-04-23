import { Component, OnInit } from '@angular/core';
import { DataService, CategoryModel } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  categories: CategoryModel[];
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.categories = await this.dataSvc.query();
  }

  public edit(id: string) {

  }

  public delete(id: string) {

  }

}
