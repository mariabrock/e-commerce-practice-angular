import { Component, inject, OnInit } from '@angular/core';
import { ProductViewComponent } from "../product-view/product-view.component";
import { ProductService } from "../../../shared/services/product.service";
import { Product } from "../../../shared/product";
import { tap } from "rxjs";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatPrefix, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    ProductViewComponent,
    MatButton,
    MatFormField,
    MatIcon,
    MatPrefix,
    MatInput,
    MatSuffix
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  public productService = inject(ProductService);

  product?: Product | undefined;

  ngOnInit() {
    this.productService.products.pipe(
      tap(data => console.log(data))
    )
      .subscribe(res => {
        this.product = res[0];
    })
  }

}
