import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(
    delay(1000)
  );
}
