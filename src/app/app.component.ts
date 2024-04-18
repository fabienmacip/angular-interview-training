import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //bookList$: Observable<string[]> | undefined;

  private bookList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    '📙',
    '📕',
    '📗',
    '📘',
  ]);
  public readonly bookList$: Observable<string[]> =
    this.bookList.asObservable();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    //this.bookList$ = this.bookService.bookList$;
  }
}
