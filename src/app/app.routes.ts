import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {HistoryComponent} from './history/history.component';
import {NotificationsComponent} from './notifications/notifications.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path:"dashboard",
    component: DashboardComponent,
    children:[{
      path:"profile",
      component:ProfileComponent,
    },{
      path:"history",
      component: HistoryComponent,
    },{
      path:"notifications",
      component: NotificationsComponent
    }]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: SignupComponent
  },
  {
    path:"main",
    component: MainComponent
  },
];
