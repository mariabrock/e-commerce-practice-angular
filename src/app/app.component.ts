import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-practice';
  hidden = false

  didEnter() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }

}
