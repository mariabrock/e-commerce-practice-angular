import { Routes } from '@angular/router';
import { CollectionsPageComponent } from "./components/collections-page/collections-page.component";
import { ProductComponent } from "./components/product/product.component";
import { MensPageComponent } from "./components/mens-page/mens-page.component";
import { WomensPageComponent } from "./components/womens-page/womens-page.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: CollectionsPageComponent,
  },
  {
    path: 'collections',
    component: CollectionsPageComponent,
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
    path: 'product/:id',
    component: ProductComponent
  },
  { path: '', redirectTo: 'collections', pathMatch: 'full'},
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'collections'
  }
];



