// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-book-form',
//   templateUrl: './book-form.component.html',
//   styleUrls: ['./book-form.component.scss']
// })
// export class BookFormComponent {

// }
// src/app/book-form/book-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit{


 book:any={
  title:'',
  author:'',
  description:'',
  publicationYear:'',
  isbn:'',

 }
    
id:any
  constructor(private bookService: BookService,public router:Router,private route:ActivatedRoute) {}
ngOnInit(): void {
   this.id= this.route.snapshot.paramMap.get('id')
   this.loadBooks()
}

loadBooks() {
  this.bookService.bookSingle(this.id).subscribe((books) => {
    this.book = books;
    console.log(this.book,"this.books")
  });
}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.bookService.updateBook(form.value,this.id).subscribe(() => {
        form.resetForm();
        this.router.navigateByUrl('/')
      });
    }
  }


}
