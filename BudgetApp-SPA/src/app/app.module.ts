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
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { HeaderComponent } from './home/showcase/header/header.component';
import { WindowComponent } from './home/showcase/window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    HomeComponent,
    SearchbarComponent,
    SidebarComponent,
    ShowcaseComponent,
    HeaderComponent,
    WindowComponent
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
