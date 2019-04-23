import { Component, OnInit } from '@angular/core';
import { BookModel, BookManageService } from '../book-manage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: BookModel[] = [];
  constructor(
    private bookSvc: BookManageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.books = await this.bookSvc.query();
  }

  public edit(id: string) {
    this.router.navigate(['add', { id: id }], { relativeTo: this.route });
  }

  public async delete(id: string) {
    await this.bookSvc.delete(id);
  }

}
