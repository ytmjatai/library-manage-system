import { Component, OnInit } from '@angular/core';
import { DataService, CategoryModel } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id: string;
  category: CategoryModel = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSvc: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!!this.id) {
      this.category = await this.dataSvc.queryById(this.id);
    }
  }

  public async doSubmit() {
    await this.dataSvc.add(this.category);
  }

}
