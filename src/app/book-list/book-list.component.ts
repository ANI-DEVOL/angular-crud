import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {



// src/app/book-list/book-list.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Book } from '../book.model';
// import { BookService } from '../book.service';

// @Component({
//   selector: 'app-book-list',
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.scss'],
// })
// export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(this.books,"this.books")
    });
  }

  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }
}
