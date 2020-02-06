import { CartCountService } from 'src/app/cart-count.service';
import { Router,  } from '@angular/router';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navbar-cart',
  templateUrl: './navbar-cart.component.html',
  styleUrls: ['./navbar-cart.component.css']
})
export class NavbarCartComponent implements OnInit {

  cartProductList;

  constructor(
    private router: Router,
    private cartService: CartCountService
  ) { }

  ngOnInit() {
    this.cartProductList=this.getLocalStorage('cart-product');
    console.log("cartProductList");
    console.log(this.cartProductList);
  }

  @Output ('closeEvent') closeEvent:EventEmitter<any> = new EventEmitter();

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

    this.cartService.cartListEvent.emit(this.cartProductList);
    
    this.setLocalStorage('cart-product', this.cartProductList);
    //let counter = this.cartProductList.length;
  }

  crossClicked(){
    this.closeEvent.emit();
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
