import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  model: CategoryModel = {};

  constructor() { }

  ngOnInit() {
  }

  public async submit() {
  }

  public cancel() {

  }

}
