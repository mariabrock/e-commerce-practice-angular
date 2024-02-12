import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { ProductService} from "../../../shared/services/product.service";
import { Product } from "../../../shared/product";
import { tap } from "rxjs";
import { CollectionsService } from "../../../shared/services/collections.service";
import { Collection } from "../../../shared/collection";

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    CommonModule
  ],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent implements OnInit{

  public collectionsService = inject(CollectionsService);

  allCollections?: Collection[] | undefined = [];

  ngOnInit() {
    this.collectionsService.collections.pipe(
      tap(data => console.log(data)),
    )
      .subscribe( res => {
        this.allCollections = res
      })
  }

}
