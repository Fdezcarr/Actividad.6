import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogged!: boolean;
  ngOnInit() {
    this.isLogged = window.location.href.indexOf('user-list') > -1;
    console.log(this.isLogged);
  }
}
