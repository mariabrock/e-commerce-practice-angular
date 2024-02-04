import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
