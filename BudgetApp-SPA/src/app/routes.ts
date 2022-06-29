import { Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { AllProjectsResolverService } from './resolvers/all-projects-resolver.service';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'overview', component: OverviewComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'all-projects', resolve: { data: AllProjectsResolverService }, component: AllProjectsComponent },
  { path: '**', redirectTo: 'all-projects', pathMatch: 'full'}
]
