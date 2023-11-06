// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookAddComponent } from './book-add/book-add.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'edit/:id', component: BookFormComponent },
  // { path: 'add-template', component: BookFormTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
