import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  proId: string;
  cartProductList;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.proId = this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.cartProductList=this.getLocalStorage('cart-product');
    console.log("cartProductList");
    console.log(this.cartProductList);
  } 

  backtoProducty() {
    this.router.navigate([`/products`]);
  }

  showCart(){
   
  }

  onRemoving(cartItem){
    console.log(cartItem );
    console.log(" button was removed");
    this.removeFromCart(cartItem);
  }

  removeFromCart(cartItem){
    console.log(cartItem);

    this.cartProductList=this.getLocalStorage('cart-product');
    let index=parseInt(cartItem.id);
    index--;
    console.log(index);
    var removed=this.cartProductList.splice(index,1);
    
    console.log(removed);
    this.setLocalStorage('cart-product', this.cartProductList);
    let counter = this.cartProductList.length;
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
