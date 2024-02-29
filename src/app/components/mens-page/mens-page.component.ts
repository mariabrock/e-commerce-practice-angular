import { Component, inject } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { AsyncPipe, NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ProductService } from "../../../shared/services/product.service";
import { map, Observable } from "rxjs";
import { Product } from "../../../shared/product";

@Component({
  selector: 'app-mens-page',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './mens-page.component.html',
  styleUrl: './mens-page.component.scss'
})
export class MensPageComponent {

  public productService = inject(ProductService);

  protected items: Observable<Product[]> = this.productService.products.pipe(
    map((products: Product[]) =>
    products.filter((p: Product) => p.type === 'mens')
    )
  )

}
