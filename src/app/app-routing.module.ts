import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroDetailComponent }      from './hero-detail/hero-detail.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { AllPostComponent } from './admin/all-post/all-post.component';
import { LoginComponent } from './admin/login/login.component';
//import { BookCreateComponent } from './book-create/book-create.component';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeLayoutComponent } from './admin-home-layout/admin-home-layout.component';
import { FrontDashboardComponent } from './frontend/front-dashboard/front-dashboard.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
const routes: Routes = [
//{ path: 'dashboard', component: DashboardComponent },
 // { path: 'heroes', component: HeroesComponent }, 
 // { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'admin/create_post', component: CreatePostComponent },
 // { path: 'admin/all_post', component: AllPostComponent },
  // { path: 'admin/login', component: LoginComponent },
   //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
  //   { path: 'bookcreate', component: BookCreateComponent },
  //{ path: 'admin/dashboard', component: AdminDashboardComponent },
  { 
        path: '', 
        component: AdminLoginLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  { path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/login', component: LoginComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/dashboard', component: AdminDashboardComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/create_post', component: CreatePostComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/all_post', component: AllPostComponent }
          
        ]
 },
 //Front End
 { 
        path: '', 
        component: FrontLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'home', component: FrontDashboardComponent }
          
        ]
 },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


