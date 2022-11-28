import { Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AddBudgetLineItemComponent } from './budget/add-budget-line-item/add-budget-line-item.component';
import { DetailBudgetLineItemComponent } from './budget/detail-budget-line-item/detail-budget-line-item.component';
import { AddBudgetFormComponent } from './components/forms/add-budget-form/add-budget-form.component';
import { WbsFormComponent } from './components/forms/wbs-form/wbs-form.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectOverviewComponent } from './overview/project-overview/project-overview.component';
import { ReportsComponent } from './reports/reports.component';
import { AddBudgetLineItemResolverService } from './resolvers/add-budget-line-item-resolver.service';
import { AllProjectsResolverService } from './resolvers/all-projects-resolver.service';
import { AreaResolverService } from './resolvers/area-resolver.service';
import { DetailBudgetLineItemResolverService } from './resolvers/detail-budget-line-item-resolver.service';
import { KpiResolverService } from './resolvers/kpi-resolver.service';
import { OverviewResolverService } from './resolvers/overview-resolver.service';
import { UnitResolverService } from './resolvers/unit-resolver.service';
import { UserinfoResolverService } from './resolvers/userinfo-resolver.service';
import { WbsDictionaryResolverService } from './resolvers/wbs-dictionary-resolver.service';
import { SidebarComponent } from './sidebar/sidebar.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'overview/:afe_id', resolve: { data: OverviewResolverService, kpi: KpiResolverService }, component: OverviewComponent },
  { path: 'add-budget-line-item/:afe_id',
    resolve: {
      afe_id: AddBudgetLineItemResolverService,
      wbs: WbsDictionaryResolverService,
      areas: AreaResolverService,
      units: UnitResolverService },
    component: AddBudgetLineItemComponent
  },
  { path: 'wbs-form', resolve: { wbs: WbsDictionaryResolverService }, component: WbsFormComponent },
  { path: 'detail-budget-line-item/:id',
    resolve: {
      budgetLineItem: DetailBudgetLineItemResolverService,
      wbs: WbsDictionaryResolverService,
      areas: AreaResolverService,
      units: UnitResolverService },
    component: DetailBudgetLineItemComponent },
  { path: 'project-overview/:afe_id',
    resolve: {
      data: OverviewResolverService,
      kpi: KpiResolverService,
      areas: AreaResolverService,
      units: UnitResolverService },
    component: ProjectOverviewComponent },
  { path: 'reports',  component: ReportsComponent },
  { path: 'all-projects', resolve: { data: AllProjectsResolverService }, component: AllProjectsComponent },
  { path: '**', redirectTo: 'all-projects', pathMatch: 'full'}
]
