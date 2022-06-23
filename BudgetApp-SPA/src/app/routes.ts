import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from "./overview/overview.component";
import { ReportsComponent } from './reports/reports.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'reports', component: ReportsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]
