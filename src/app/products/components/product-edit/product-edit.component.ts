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

  constructor(
    private fb: FormBuilder
  ) { }

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
    this.bookForm.get('id').setValue('demo');
    console.log(this.bookForm.value);
    this.addToList(this.bookForm.value);
  }

  addToList(product){
    console.log(product +" added to cart" );
    let cartProduct=this.getLocalStorage('product-list');
    cartProduct = [...cartProduct, product];
    this.setLocalStorage('product-list', cartProduct);
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
