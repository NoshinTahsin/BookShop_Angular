import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent implements OnInit {

  cartProductList;

  constructor() { }

  ngOnInit() {
    
  }

  cartClick(){
    this.cartProductList=this.getLocalStorage('cart-product');
    console.log("cartProductList");
    console.log(this.cartProductList);
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
