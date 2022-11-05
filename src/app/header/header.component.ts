import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icons = ['fa-bars', 'fa-xmark'];
  showLinks = false;
  links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'O Nama',
      path: '/o-nama',
    },
    {
      name: 'Krav Maga',
      path: '/krav-maga',
    },
    {
      name: 'Trening',
      path: '/trening'
    },
    {
      name: 'Media',
      path: '/media'
    },
    {
      name: 'Cene',
      path: '/cene'
    },
    {
      name: 'Kontakt',
      path: '/kontakt'
    },
    {
      name: 'Postani Instruktor',
      path: '/postani-instruktor'
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}
