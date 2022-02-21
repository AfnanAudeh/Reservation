import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusinfoComponent } from './contactusinfo/contactusinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SysimageComponent } from './sysimage/sysimage.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path:'contactUsInfo',
    component:ContactusinfoComponent
  },
  {
    path:'sysImage',
    component:SysimageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
