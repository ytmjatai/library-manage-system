import { Component, OnInit } from '@angular/core';
import { BookModel, BookManageService } from '../book-manage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: BookModel[] = [];
  constructor(
    private bookSvc: BookManageService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.books = await this.bookSvc.query();
  }

}
