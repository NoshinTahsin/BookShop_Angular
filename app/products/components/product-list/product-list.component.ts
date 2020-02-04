import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ProductListService } from './product-list.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  initProductList= [];
  productList = [];
  isActive=false;
  isClicked=false;
  pdc:ProductDetailsComponent; 
  counter;
  @Output() change = new EventEmitter();
  constructor(
    private service:ProductListService, 
    private router: Router
  ){
      
  } 

  ngOnInit() {

    this.productList=this.getLocalStorage('product-list');
    if(this.productList.length==0){
      this.initProductList= this.service.getProducts();
      console.log(this.initProductList);
      this.setLocalStorage('product-list', this.initProductList);
    }
    
  }

  onAdding(product, num){
    console.log(product );
    console.log(" button was clicked");
    this.isClicked=true;

    this.addToCart(product,num);
  }

  addToCart(product, num){
    console.log(product +" added to cart" );

    let cartProduct=this.getLocalStorage('cart-product');
    //const index=parseInt(dataId)-1;
    //let product=this.productList[index];

    let flag=true;

    if(num==0){
      let it=cartProduct.length;
      for(let i=0;i<it;i++){
       if(product.id==cartProduct[i].id){
         cartProduct[i].quantity+=1;
         this.setLocalStorage('cart-product', cartProduct);
         flag=false;
       }
     }

     if(flag){
      cartProduct = [...cartProduct, product];
      this.setLocalStorage('cart-product', cartProduct);
     }

    }

    else{
      let it=cartProduct.length;
       for(let i=0;i<it;i++){
        if(product.id==cartProduct[i].id){
          cartProduct[i].quantity+=num;
          this.setLocalStorage('cart-product', cartProduct);
        }
      }
    }
    
    this.counter = cartProduct.length;
    if(this.isClicked){
      // replacedom 
    }
  }

  viewDetails(product){
    
    this.router.navigate([`/products/${product.id}/details`]);
    //which will redirect us to the path 
    //`/products/${product.id}/details` 
  }

  getLocalStorage(name, initValue=[])  {
    const data = localStorage.getItem(name);
    return data && this.IsJsonString(data) ? JSON.parse(data) : initValue;
  }

  setLocalStorage(name, data){
    const jsonString = JSON.stringify(data);
    localStorage.setItem(name, jsonString);
  }
  
   IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

}

