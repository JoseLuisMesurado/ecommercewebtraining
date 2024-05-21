import { Routes } from '@angular/router';
import { HomeComponent } from './layoutview/home/home.component';
import { SearchgridComponent } from './layoutview/search/components/searchgrid/searchgrid.component';
import { AddproductComponent } from './layoutview/search/components/addproduct/addproduct.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
  },
  {
    path: 'search/:searchtext',
    component: SearchgridComponent,
  },
  {
    path: 'search',
    component: SearchgridComponent,
  },
];
