import { Component, OnInit } from '@angular/core';
import { BookManageService, BookModel } from '../book-manage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  book: BookModel = {};
  constructor(
    private bookSvc: BookManageService
  ) { }

  ngOnInit() {
  }

  public doSubmit() {
    this.bookSvc.add(this.book);
  }

}
