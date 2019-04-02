import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookManageService {

  constructor(
    private http: HttpClient
  ) { }


  async query(): Promise<BookModel[]> {
    const url = environment.apiBaseUrl + '/books';
    try {
      const books = await this.http.get<BookModel[]>(url).toPromise();
      return books;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async queryById(id: string): Promise<BookModel> {
    const url = environment.apiBaseUrl + '/books/' + id;
    try {
      const book = await this.http.get<BookModel>(url).toPromise();
      return book;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  async add(book: BookModel) {
    const url = environment.apiBaseUrl + '/books';
    try {
      await this.http.post(url, book).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  async update(book: BookModel) {
    const url = environment.apiBaseUrl + '/books';
    try {
      await this.http.put(url, book).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string) {
    const url = environment.apiBaseUrl + '/books';
    const p = new HttpParams().set('id', `${id}`)
    try {
      await this.http.delete(url, { params: p }).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

}

export interface BookModel {
  _id?: string;
  name?: string;
  author?: string;
  desc?: string;

}
