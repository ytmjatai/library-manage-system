import { Component, OnInit } from '@angular/core';
import { BookManageService, BookModel } from '../book-manage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  book: BookModel = {};
  id: string;
  constructor(
    private bookSvc: BookManageService,
    private route: ActivatedRoute

  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!!this.id) {
      this.book = await this.bookSvc.queryById(this.id);
    }
  }

  public async doSubmit() {
    if (!!this.id) {
      await this.bookSvc.update(this.id, this.book);
    } else {
      await this.bookSvc.add(this.book);
    }
    this.book = {};
  }

}
