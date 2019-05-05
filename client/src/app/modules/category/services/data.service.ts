import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.apiBaseUrl + '/category';
  categories$ = new BehaviorSubject<CategoryModel[]>([]);
  categorites: CategoryModel[];
  constructor(
    private http: HttpClient
  ) { }

  async query(): Promise<CategoryModel[]> {

    try {
      const data = await this.http.get<CategoryModel[]>(this.url).toPromise();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async queryById(id: string): Promise<CategoryModel> {
    const url = this.url + `/${id}`
    try {
      return this.http.get<CategoryModel>(url).toPromise();
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  async add(cate: CategoryModel) {
    try {
      await this.http.post(this.url, cate).toPromise();
      console.log('添加成功');
    } catch (error) {
      console.error(error);
      alert('添加失败');

    }
  }

  async delete(id: string) {
    const url = this.url + `/${id}`;
    try {
      await this.http.delete(url).toPromise();
    } catch (error) {
      console.error(error);
      alert('删除失败');

    }
  }

  async pullCategories$() {
    const data = await this.query();
    data.map(d => d.expended = true)
    this.categories$.next(data);
  }

}

export interface CategoryModel {
  _id?: string;
  parentId?: string;
  name?: string;
  tags?: string[];
  code?: string;
  order?: number;
  isView?: number;
  expended?: boolean;


}
