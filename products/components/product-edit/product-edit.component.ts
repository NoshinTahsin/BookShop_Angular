import { Router, ActivatedRoute } from '@angular/router';
import { UsernameValidators } from './username.validator';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  bookForm: FormGroup;
  proId;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router 
  ) { 

    this.proId = this.activeRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.bookForm = this.fb.group(
      {
        id: [''],
        title: ['', [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace]],
        author: ['', [Validators.required]],
        des: [''],
        price: [0, [Validators.required]]
      }
    );
  }

  get title(){
    return this.bookForm.get('title');
  }

  get author(){
    return this.bookForm.get('author');
  }

  get des(){
    return this.bookForm.get('des');
  }

  get price(){
    return this.bookForm.get('price');
  }

  login(){
    this.bookForm.setErrors({
      invalidLogin:false
    }); 
  }

  showTitle(){
    //this.bookForm.get('id').setValue('demo');
    console.log(this.bookForm.value);
    this.addToList(this.bookForm.value);
  }

  addToList(product){
    console.log(product +" added to cart" );
    let editProduct=this.getLocalStorage('product-list');
    let editCartProduct=this.getLocalStorage('cart-product');

    let it=editProduct.length;
       for(let i=0;i<it;i++){
        if(this.proId==editProduct[i].id){
          editProduct[i].title=product.title;
          editProduct[i].author=product.author;
          editProduct[i].des=product.des;
          editProduct[i].price=product.price;

          this.setLocalStorage('product-list', editProduct);
        }
      }

      let cit=editCartProduct.length;
      for(let i=0;i<cit;i++){
       if(this.proId==editCartProduct[i].id){
        editCartProduct[i].title=product.title;
        editCartProduct[i].author=product.author;
        editCartProduct[i].des=product.des;
        editCartProduct[i].price=product.price;

         this.setLocalStorage('cart-product', editCartProduct);
       }
     }

     this.takeToDetail();
 
  }
  
  takeToDetail(){
    //routerLink="/products/{{this.proId}}/details"
    this.router.navigate([`/products/${this.proId}/details`]);
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
