import { Routes } from '@angular/router';
import { CollectionsPageComponent } from "./components/collections-page/collections-page.component";
import { ProductComponent } from "./components/product/product.component";
import { MensPageComponent } from "./components/mens-page/mens-page.component";
import { WomensPageComponent } from "./components/womens-page/womens-page.component";

export const routes: Routes = [
  {
    path: '',
    component: CollectionsPageComponent
  },
  {
    path: 'mens',
    component: MensPageComponent
  },
  {
    path: 'womens',
    component: WomensPageComponent
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
