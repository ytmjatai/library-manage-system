import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.apiBaseUrl + '/category';

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
      console.log('添加失败');

    }
  }

  async delete(ids: string[]) {

  }




}

export interface CategoryModel {
  _id?: string;
  parentId?: string;
  name?: string;
  tags?: string[];
}
