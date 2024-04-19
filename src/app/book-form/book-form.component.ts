import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    cover: new FormControl(''),
    author_firstname: new FormControl(''),
    author_lastname: new FormControl(''),
    pageCount: new FormControl(0),
    releaseDate: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.bookForm.value);
  }
}
