import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bookList$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookList$ = this.bookService.bookList$;
  }
}
