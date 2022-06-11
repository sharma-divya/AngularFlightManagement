import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from '././Component/adminlogin/adminlogin.component';
import { RegisterComponent } from '././Component/register/register.component';
import { LoginComponent } from '././Component/login/login.component';
import { AdmindashboardComponent } from '././Component/admindashboard/admindashboard.component';
const routes: Routes = [
  {
    path:"register" ,
    component: RegisterComponent
  },
  {
    path:"adminlogin" ,
    component: AdminloginComponent
  },
  {
    path:"" ,
    component: LoginComponent
  },
  {
    path:"userlogin" ,
    component: LoginComponent
  },
  {
    path:"admindashboard" ,
    component: AdmindashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AdminloginComponent , RegisterComponent ,LoginComponent , AdmindashboardComponent]
