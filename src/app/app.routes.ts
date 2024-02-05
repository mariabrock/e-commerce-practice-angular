import { Routes } from '@angular/router';
import { CollectionsPageComponent } from "./collections-page/collections-page.component";
import { ProductComponent } from "./product/product.component";

export const routes: Routes = [
  {
    path: '',
    component: CollectionsPageComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'collections'
  }
];
