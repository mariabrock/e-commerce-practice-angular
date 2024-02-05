import { Component, inject, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { Router } from "express";
import { ProductService } from "../../shared/services/product.service";

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [
    MatCard,
    MatIcon
  ],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent implements OnInit{

  public productService = inject(ProductService);
  public router = inject(Router);

  // allCollections?: Product[] | undefined = [];

  ngOnInit() {
    this.productService.getProducts();
  }

  goToProduct(id: number) {
    this.router.navigate(['product', `${id}`]);
  }

}
