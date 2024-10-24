import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/chart/pages/chart-page/chart-page.component').then((page) => page.ChartPageComponent),
  }
];
