import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from '././Component/adminlogin/adminlogin.component';
import { RegisterComponent } from '././Component/register/register.component';
import { LoginComponent } from '././Component/login/login.component';
import { AdmindashboardComponent } from '././Component/admindashboard/admindashboard.component';
import { AirlineComponentComponent } from './Component/airline-component/airline-component.component';
import { ScheduleComponent } from './Component/schedule/schedule.component';
import { UserdashboardComponent } from './Component/userdashboard/userdashboard.component';
import { BookinghistoryComponent } from './Component/bookinghistory/bookinghistory.component';
import { SearchbookingComponent } from './Component/searchbooking/searchbooking.component';
import { ManagebookingComponent } from './Component/managebooking/managebooking.component';
import { ViewbookingpnrComponent } from './Component/viewbookingpnr/viewbookingpnr.component';
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
    path:"manageairline" ,
    component: AirlineComponentComponent
  },
  {
    path:"manageschedule" ,
    component: ScheduleComponent
  },
  {
    path:"bookflight" ,
    component: SearchbookingComponent
  },
  {
    path:"managebooking" ,
    component: ManagebookingComponent
  },
  {
    path:"bookings" ,
    component: BookinghistoryComponent
  },
  {
    path:"viewbookingpnr" ,
    component: ViewbookingpnrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AdminloginComponent 
  ,RegisterComponent 
  ,LoginComponent 
  ,AdmindashboardComponent
  ,AirlineComponentComponent
  ,ScheduleComponent
  ,UserdashboardComponent
  ,ManagebookingComponent
  ,SearchbookingComponent
  ,BookinghistoryComponent
  ,ViewbookingpnrComponent
]
