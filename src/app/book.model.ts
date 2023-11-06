// src/app/book.model.ts
export interface Book {
    id?: number;
    title: string;
    author: string;
    description?: string;
    publicationYear?: number;
    isbn: string;
  }
  