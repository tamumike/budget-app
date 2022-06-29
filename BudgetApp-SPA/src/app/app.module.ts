import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetComponent } from './budget/budget.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { WindowComponent } from './home/showcase/window/window.component';
import { TitleComponent } from './home/showcase/title/title.component';
import { KpiComponent } from './kpi/kpi.component';
import { MetricComponent } from './kpi/metric/metric.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    HomeComponent,
    SearchbarComponent,
    SidebarComponent,
    ShowcaseComponent,
    WindowComponent,
    TitleComponent,
    KpiComponent,
    MetricComponent,
    OverviewComponent,
    ReportsComponent,
    AllProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
