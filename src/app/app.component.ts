import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(
    delay(1000)
  );

  bookList: string[] = [];

  ngOnInit(): void {
    this.bookList$.subscribe((bookList) => (this.bookList = bookList));
  }
}

//  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));

/*     `<img draggable="false" role="img" class="emoji" alt="📙" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4d9.svg">`,
'<img draggable="false" role="img" class="emoji" alt="📕" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4d5.svg">',
'<img draggable="false" role="img" class="emoji" alt="📗" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4d7.svg">',
'<img draggable="false" role="img" class="emoji" alt="📘" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4d8.svg">',
*/
