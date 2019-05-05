import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel, DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  categories$: Observable<CategoryModel[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private sliderSvc: SliderService
  ) { }

  ngOnInit() {
    this.categories$ = this.dataSvc.categories$;
    this.dataSvc.pullCategories$();
  }


  public itemClick(category: CategoryModel) {
    if (this.sliderSvc.category && this.sliderSvc.category._id === category._id) {
      this.sliderSvc.category = null;
      return;
    }
    this.sliderSvc.category = category;
  }

  public add() {
    if (!this.sliderSvc.category) {
      this.router.navigate(['add'], { relativeTo: this.route });
      return;
    }
    this.router.navigate(
      ['add', { id: this.sliderSvc.category._id }],
      { relativeTo: this.route }
    );
  }

  public async delete() {
    if (!this.sliderSvc.category) {
      alert('请选择要删除的分类');
    }
    const id = this.sliderSvc.category._id;
    try {
      await this.dataSvc.delete(id);
      this.sliderSvc.category = null;
      this.dataSvc.pullCategories$();
    } catch (error) {
      console.error(error);
    }
  }

  public edit() {
    const category = this.sliderSvc.category;
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

