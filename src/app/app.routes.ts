import { Routes } from '@angular/router';
import { CollectionsPageComponent } from "./components/collections-page/collections-page.component";
import { ProductComponent } from "./components/product/product.component";

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
