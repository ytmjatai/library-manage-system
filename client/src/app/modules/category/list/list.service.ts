import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryModel, DataService } from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  categories$ = new BehaviorSubject<CategoryModel[]>([]);
  category: CategoryModel;
  constructor(
    private dataSvc: DataService
  ) { }

  async getCategories() {
    const data = await this.dataSvc.query();
    this.categories$.next(data);
  }


}
