import { Component, inject, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ProductService } from "../../../shared/services/product.service";
import { filter, map, Observable, tap } from "rxjs";
import { Product } from "../../../shared/product";

@Component({
  selector: 'app-mens-page',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    RouterLink
  ],
  templateUrl: './mens-page.component.html',
  styleUrl: './mens-page.component.scss'
})
export class MensPageComponent implements OnInit {

  // mensCollections?: Product[] | undefined = [];

  get products(): Observable<Product[]> {
    return this.productService.products;
  }

  public productService = inject(ProductService);

  ngOnInit() {
    this.products.pipe(
      tap(data => console.log(data)),
      filter((item) => item.type === 'mens')
    ).subscribe((item) => console.log(item))
  }

}
