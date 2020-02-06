import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartCountService } from '../../../cart-count.service';

//decorator function takes as input an object, We can add one or
// more properties in this object to tell the Angular how this component works. 
//‘selector’, ‘template’ and ‘style’- are properties
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  proId: string;
  productList;

  constructor(
    private activeRoute: ActivatedRoute,
    private cartService:CartCountService,
    private router: Router,
   ) {  
    //we will use ActivatedRoute Module to obtain the selected id from the URL,
    // the ActivatedRoute module contains a paramMap method which returns an Observable.
    // As it is observable, whenever the URL id changes, angular updates the binding in the view.
    //ActivatedRoute contains the information about a route associated with a component loaded in an outlet
    this.proId = this.activeRoute.snapshot.paramMap.get('id');

   /* WHEN SHOULD WE DO THIS??

    ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.selected = +(params.get('id'));
      console.log(this.selected);
    });
  }*/

  }

  ngOnInit() {
    console.log("Initialize hoise");
    console.log("showing details");
    this.productList=this.getLocalStorage('product-list');
    console.log(this.productList);
    let it=this.productList.length;
  } 

  backtoProducty() {
    this.router.navigate([`/products`]);
  }

  showDetails(){
   
   /*for(let i=0;i<it;i++){
      if(this.proId==productList[i].id){
        let product = Object.assign({}, productList[i]);
        console.log(product);
      }
   }*/

  }

  onAdding(product, num){
    console.log(product );
    console.log(" button was clicked");
 
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
     

    } else{
      let it=cartProduct.length;
       for(let i=0;i<it;i++){
        if(product.id==cartProduct[i].id){
          cartProduct[i].quantity+=num;
          this.setLocalStorage('cart-product', cartProduct);
        }
      }
    }

    this.cartService.cartListEvent.emit(cartProduct);
    
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
