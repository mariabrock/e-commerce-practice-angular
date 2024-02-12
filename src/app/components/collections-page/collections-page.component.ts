import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { ProductService} from "../../../shared/services/product.service";
import { Product } from "../../../shared/product";
import { tap } from "rxjs";

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    CommonModule
  ],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent implements OnInit{

  public productService = inject(ProductService);

  allProduct?: Product[] | undefined = [];

  ngOnInit() {
    this.productService.products.pipe(
      tap(data => console.log(data)),
    )
      .subscribe( res => {
        this.allProduct = res
      })
  }

}
