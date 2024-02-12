import { Injectable } from '@angular/core';
import { Collection } from "../collection";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor() { }

  private data: Collection[] = [
    {
      "name": "Kid's Collection",
      "id": "kids",
      "imgURL": "./assets/images/kids-collection.jpg"
    },
    {
      "name": "Men's Collection",
      "id": "mens",
      "imgURL": "./assets/images/mens-collection.jpg"
    },
    {
      "name": "Women's Collection",
      "id": "womens",
      "imgURL": "./assets/images/womens-collection.jpg"
    },
    {
      "name": "Sale",
      "id": "sale",
      "imgURL": "./assets/images/sale.jpg"
    }
  ]

  private collections$ = new BehaviorSubject<Collection[]>(this.data);
  collections = this.collections$.asObservable();
}
