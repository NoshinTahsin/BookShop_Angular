import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { NavbarCartComponent } from './navbar-cart/navbar-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    NavbarCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    RouterModule.forRoot ([
      {
        path: 'products', loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
      },
      { path: '', pathMatch: 'full', redirectTo: '/products'},
      { path: 'navbar-cart', component:NavbarCartComponent},
      {path: '**', redirectTo: '404'}
    ])
    
  ],
  providers: [
   ], //dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
