import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(
    delay(1000)
  );

  constructor() {}
}
