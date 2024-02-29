import { Component, inject } from '@angular/core';
import { ProductService } from "../../../shared/services/product.service";
import { map, Observable } from "rxjs";
import { Product } from "../../../shared/product";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCard } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-womens-page',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCard,
    NgForOf,
    RouterLink
  ],
  templateUrl: './womens-page.component.html',
  styleUrl: './womens-page.component.scss'
})
export class WomensPageComponent {

  public productService = inject(ProductService);

  protected items: Observable<Product[]> = this.productService.products.pipe(
    map((products: Product[]) =>
      products.filter((p: Product) => p.type === 'womens')
    )
  )

}
