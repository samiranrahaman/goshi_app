import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent } from './heroes/heroes.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//import { HeroService } from './hero.service';
import { AppRoutingModule } from './/app-routing.module';
//import { MessagesComponent } from './messages/messages.component';
//import { MessageService } from './message.service';
import { CreatePostComponent } from './admin/create-post/create-post.component';

import { HttpClientModule } from '@angular/common/http';
import { AllPostComponent } from './admin/all-post/all-post.component';
import { LoginComponent } from './admin/login/login.component';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';
import { AdminHomeLayoutComponent } from './admin-home-layout/admin-home-layout.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FrontDashboardComponent } from './frontend/front-dashboard/front-dashboard.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
//import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
   // DashboardComponent,
  //  HeroesComponent,
 //   HeroDetailComponent,
  //  MessagesComponent,
    CreatePostComponent,
    AllPostComponent,
    LoginComponent,
    //AdminDashboardComponent,
    AdminLoginLayoutComponent,
    AdminHomeLayoutComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    SidebarComponent,
    FrontDashboardComponent,
    FrontLayoutComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
  //  BookCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  HttpClientModule
  ],
 // providers: [HeroService, MessageService],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
