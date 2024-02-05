import { Routes } from '@angular/router';
import { CollectionsPageComponent } from "./collections-page/collections-page.component";
import { MensPageComponent } from "./mens-page/mens-page.component";
import { WomensPageComponent } from "./womens-page/womens-page.component";
import { ProductComponent } from "./product/product.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
  {
    path: 'collections',
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'collections'
  }
];
