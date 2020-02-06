import { CartCountService } from './../cart-count.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent implements OnInit {

  cartProductList;
  cartItemShow: boolean;
  counter:number=0;

  constructor(private router: Router,
    private cartService: CartCountService
   ) {
    let cartProduct=this.getLocalStorage('cart-product');
    this.counter = cartProduct.length;
    }


  ngOnInit() {
    this.cartProductList=this.getLocalStorage('cart-product');
    console.log("cartProductList");
    console.log(this.cartProductList);
    this.cartService.cartListEvent.subscribe(
      res => {
        this.counter = Array.isArray(res) ? res.length : 0;
      }
    );
  }

  onRemoving(cartItem){
    console.log(cartItem );
    console.log(" button was removed");
    this.removeFromCart(cartItem);
  }

  backtoProducty() {
    this.router.navigate([`/products`]);
  }

  removeFromCart(cartItem){
    console.log(cartItem);
    this.cartProductList=this.getLocalStorage('cart-product');
    
    let it=0;
    for(it=0;it<this.cartProductList.length;it++){
      if(cartItem.id==this.cartProductList[it].id){
        var removed=this.cartProductList.splice(it,1);
        console.log(removed);
      }
    }
    
    this.setLocalStorage('cart-product', this.cartProductList);
  }

  crossClicked(){
    this.cartItemShow = !this.cartItemShow;
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
