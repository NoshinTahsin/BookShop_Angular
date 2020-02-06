import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor() { }

  getProducts(){
    return [
      {
          id: 1, img: 'assets/fahrenhite.jpg',
          title: 'Fahrenhite 451', author:'Ray Bradbury', price: 'BDT 220', des: 'A dystopian novel', quantity: 1
      },
      {
          id: 2, img: 'assets/animal_farm.jpg',
          title: 'Animal Farm', author: 'George Orwell', price: 'BDT 120', des: 'A political satire', quantity: 1
      },
      {
          id: 3, img: 'assets/hp.jpg',
          title: 'Harry Potter and The Philosopher\'s Stone', author: 'J.K. Rowling ', price: 'BDT 170', des: 'Fantasy', quantity: 1
      },
      {
          id: 4, img: 'assets/time_machine.jfif',
          title: 'The Time Machine', author: 'H.G. Wells', price: 'BDT 180', des: 'A Dystopian Sci-fi', quantity: 1
      }, 
      {
          id: 5, img: 'assets/whitefang.png',
          title: 'White Fang', author: 'Jack London', price: 'BDT 150', des: 'A political satire', quantity: 1
      },
      {
          id: 6, img: 'assets/matilda.jpg',
          title: 'Matilda', author: 'Roald Dahl', price: 'BDT 120', des: 'Children\'s book - Fantasy', quantity: 1
      },
      {
          id: 7, img: 'assets/little_prince.jpg',
          title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: 'BDT 140', des: 'A political satire', quantity: 1
      },
      {
          id: 8, img: 'assets/tale.jfif',
          title: 'A Tale of Two Cities', author: 'Charles Dickens', price: 'BDT 240', des: 'A political satire', quantity: 1
      },
      {
          id: 9, img: 'assets/kafka.jpg',
          title: 'Kafka On The Shore', author: 'Haruki Murakami', price: 'BDT 220', des: 'A political satire', quantity: 1
      }
  ]

}
}
