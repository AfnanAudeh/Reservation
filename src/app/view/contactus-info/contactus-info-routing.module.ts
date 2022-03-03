import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusinfoComponent } from './contactusinfo/contactusinfo.component';

const routes: Routes = [
  {
    path:'ContactUsInfo',
    component:ContactusinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusInfoRoutingModule { }
