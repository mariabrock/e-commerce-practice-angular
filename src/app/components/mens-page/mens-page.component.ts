import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Product } from "../../../shared/product";

@Component({
  selector: 'app-mens-page',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    RouterLink
  ],
  templateUrl: './mens-page.component.html',
  styleUrl: './mens-page.component.scss'
})
export class MensPageComponent {

  mensProducts? : Product[] | undefined;


}
