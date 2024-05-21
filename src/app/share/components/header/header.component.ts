import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { ChipModule } from 'primeng/chip';
import { SidebarModule } from 'primeng/sidebar'
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, SidebarModule, ChipModule, FormsModule, CommonModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, ChipsModule, OverlayPanelModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  searchtex: string = '';
  loading: boolean = false;
  sidebarVisible: boolean = false;;

  constructor(private route: Router) { }

  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
  ];
  ngOnInit(): void {

  }
  searchproduct() {
    this.loading = true;
    this.route.navigate(['search'], { queryParams: { searchtext: this.searchtex } });
  }
  opensidebar() {
    alert(1);
    this.sidebarVisible = !this.sidebarVisible;
  }

}
