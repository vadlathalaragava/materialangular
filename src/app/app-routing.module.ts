import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component'
import { RoutingComponent } from './routing/routing.component'
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import { NewloginComponent} from './newlogin/newlogin.component'

const routes: Routes = [
  {
    path:'dashbord',
    component:DashboardComponent
  },
  {
    path:'newlogin',
    component:NewloginComponent
  },
  {
    path:'',
    redirectTo:'/newlogin',
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
