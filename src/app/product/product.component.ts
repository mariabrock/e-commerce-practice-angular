import { Component } from '@angular/core';
import { LightGalleryComponent } from "../light-gallery/light-gallery.component";
import { ProductViewComponent } from "../product-view/product-view.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    LightGalleryComponent,
    ProductViewComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
