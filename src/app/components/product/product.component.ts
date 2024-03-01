import { Component, inject, OnInit } from '@angular/core';
import { ProductViewComponent } from "../product-view/product-view.component";
import { ProductService } from "../../../shared/services/product.service";
import { Product } from "../../../shared/product";
import { switchMap, tap } from "rxjs";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatPrefix, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { ActivatedRoute, ParamMap } from "@angular/router";

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

  item: Product = {};

  itemName = '';
  itemDesc = '';
  itemMarkdown = 0;
  itemPrice = 0;

  public productService = inject(ProductService);
  public route = inject(ActivatedRoute);

  ngOnInit() {
  console.log(this.route.snapshot.paramMap.get('id'))
    this.productService.products
      .subscribe(res => {
        const id = this.route.snapshot.paramMap.get('id');
        this.productService.getProduct('id')
        if ('id' === id ) {
          res = this.item;
        }

        this.itemName = this.item.name;
        this.itemDesc = this.item.description
        this.itemMarkdown = this.item.markdown
        this.itemPrice = this.item.price
    })
    // this.productService.getProduct((this.product?.id) as string);
  }

}
