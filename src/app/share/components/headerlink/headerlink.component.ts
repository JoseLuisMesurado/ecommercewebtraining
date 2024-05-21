import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlink',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './headerlink.component.html',
  styleUrl: './headerlink.component.scss'
})
export class HeaderlinkComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private route: Router) { }
  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        route: '/home',
        // command: () => {
        //   this.route.navigate(['home']);
        // }
      },
      {
        label: 'ALL PRODUCTS',
        route: '/search',
        // command: () => {
        //   this.route.navigate(['search']);
        // }
      },
      {
        label: 'BLOG',
        url: 'https://blog.dracocomarch.com/',
        target: '_blank'
      },
      {
        label: 'PODCAST',
        url: 'https://comocurar.com/',
        target: '_blank'
      },
      {
        label: 'EMBAJADORAS',
        url: 'https://store.dracocomarch.com/en/top-products/586-annual-subscription-ambassadors.html',
        target: '_blank'
      },
      {
        label: 'VITATIENDA EUROPE',
        url: 'https://lnk.vitatienda.com/4bmVrIj',
        target: '_blank'
      }
    ];
  }
}
