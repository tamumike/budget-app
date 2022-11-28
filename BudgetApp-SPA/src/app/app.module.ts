import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleComponent } from './title/title.component';
import { KpiComponent } from './kpi/kpi.component';
import { MetricComponent } from './kpi/metric/metric.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { DxCheckBoxModule, DxDataGridModule, DxPivotGridModule, DxPopupModule, DxTemplateModule } from 'devextreme-angular';
import { DxPivotGridService } from './services/dx-pivot-grid.service';
import { AddBudgetLineItemComponent } from './budget/add-budget-line-item/add-budget-line-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailBudgetLineItemComponent } from './budget/detail-budget-line-item/detail-budget-line-item.component';
import { WbsFormComponent } from './components/forms/wbs-form/wbs-form.component';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { AddBudgetFormComponent } from './components/forms/add-budget-form/add-budget-form.component';
import { ProjectOverviewComponent } from './overview/project-overview/project-overview.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Service } from './services/service.service';
import { ModalComponent } from './components/modal/modal.component';
import { BudgetFocusComponent } from './overview/budget-focus/budget-focus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    SidebarComponent,
    TitleComponent,
    KpiComponent,
    MetricComponent,
    OverviewComponent,
    ReportsComponent,
    AllProjectsComponent,
    AddBudgetLineItemComponent,
    DetailBudgetLineItemComponent,
    WbsFormComponent,
    AddBudgetFormComponent,
    ProjectOverviewComponent,
    ModalComponent,
    BudgetFocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    DxTemplateModule,
    DxPivotGridModule,
    DxPopupModule,
    DxDataGridModule,
    DxCheckBoxModule
  ],
  providers: [
    DxPivotGridService,
    CurrencyPipe,
    PercentPipe,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
