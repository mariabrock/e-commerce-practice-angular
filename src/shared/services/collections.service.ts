import { Injectable } from '@angular/core';
import { Collection } from "../collection";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor() { }

  private data: Collection[] = [
    // {
    //   "name": "Kid's Collection",
    //   "id": "kids",
    //   "imgURL": "./assets/images/kids-collection.jpg",
    //   "endpoint": "/kids"
    // },
    {
      "name": "Men's Collection",
      "id": "mens",
      "imgURL": "./assets/images/mens-collection.jpg",
      "endpoint": "/mens"
    },
    {
      "name": "Women's Collection",
      "id": "womens",
      "imgURL": "./assets/images/womens-collection.jpg",
      "endpoint": "/womens"
    },
    // {
    //   "name": "Sale",
    //   "id": "sale",
    //   "imgURL": "./assets/images/sale.jpg",
    //   "endpoint": "/sale"
    // }
  ]

  private collections$ = new BehaviorSubject<Collection[]>(this.data);
  collections = this.collections$.asObservable();
}
