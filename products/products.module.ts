import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: ':id/details', component: ProductDetailsComponent},
  {path: ':id/edit', component: ProductEditComponent}
];

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
