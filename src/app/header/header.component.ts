import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleLinks = false;
  links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'O Nama',
      path: '/'
    },
    {
      name: 'Krav Maga',
      path: '/'
    },
    {
      name: 'Trening',
      path: '/'
    },
    {
      name: 'Media',
      path: '/'
    },
    {
      name: 'Cene',
      path: '/'
    },
    {
      name: 'Kontakt',
      path: '/'
    },
    {
      name: 'Postani Instruktor',
      path: '/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
