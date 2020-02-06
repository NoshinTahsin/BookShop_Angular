import { Injectable, OnInit, EventEmitter } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class CartCountService {

  counter: number = 0;
  cartProductList;

  cartListEvent:EventEmitter<any>=new EventEmitter();
 
  constructor() { }

  cartCount(){
   // this.cartProductList=this.getLocalStorage('cart-product');
   // this.counter=this.cartProductList.length;
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
