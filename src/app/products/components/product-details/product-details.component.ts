import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) { 
    this.proId = this.activeRoute.snapshot.paramMap.get('id');
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
