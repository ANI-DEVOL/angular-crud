// src/app/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:4000/books';
  
  httpOptions:any = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',

    }),
  };

  constructor(private http: HttpClient) {}


  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(book: Book,id:any): Observable<Book> {
    console.log(book,book.id,"book.id")
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }
  
  bookSingle(id:any): Observable<Book> {
   
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
