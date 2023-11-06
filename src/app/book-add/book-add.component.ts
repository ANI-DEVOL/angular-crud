import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent {



  bookForm:any= FormGroup;
  id:any
    constructor(private fb: FormBuilder,private route:ActivatedRoute,
       private bookService: BookService,private router:Router) {}
  
    ngOnInit(): void {
      this.initForm();
  this.id = this.route.snapshot.paramMap.get('id')
    }
  
  
  
    initForm() {
      this.bookForm = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: [''],
        publicationYear: [''],
        isbn: ['', Validators.required],
      });
    }
  
    onSubmit() {
      if (this.bookForm.valid) {
        const newBook: Book = this.bookForm.value;
    
        this.bookService.addBook(newBook).subscribe(() => {
          // Optional: Navigate to the book list or reset the form
          this.initForm();
        this.router.navigateByUrl('/')

        });
       
       
      }
    }
}