import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ReservationModule } from './home/reservation/reservation.module';
import { IndexComponent } from './home/index/index.component';
import { AuthModule } from './auth/auth.module';
import { AdminDashboardComponent } from './Dashboards/admin-dashboard/admin-dashboard.component';
import { TableModule } from './view/table/table.module';
import { AdminLayoutComponent } from './layouts copy/admin-layout/admin-layout.component';
import { CustomersModule } from './view/customers/customers.module';
import { AboutusComponent } from './view/aboutus/aboutus.component';





const routes: Routes = [
  {
    path: 'reservation',
    loadChildren: () => ReservationModule
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'sec',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }
  ,
  {

    path: 'me',
    loadChildren: () => import('../app/view/menuitems/menuitems.module').then(m => m.MenuitemsModule)

  },
  {

    path: 'category',
    loadChildren: () => import('../app/view/menu-category/menu-category.module').then(m => m.MenuCategoryModule)

  }
  ,
  {

    path: 'dis',
    loadChildren: () => import('../app/view/menuitem-discount/menuitem-discount.module').then(m => m.MenuitemDiscountModule)

  },
  {

    path: 'review',
    loadChildren: () => import('../app/view/menuitem-review/menuitem-review.module').then(m => m.MenuitemReviewModule)

  }
  ,
  {
    path: 'order',
    loadChildren: () => import('../app/view/order/order.module').then(m => m.OrderModule)

  }
  ,
  {

    path: 'orderItem',
    loadChildren: () => import('../app/view/orderitem/orderitem.module').then(m => m.OrderitemModule)

  }
  ,
  {

    path: 'payment',
    loadChildren: () => import('../app/view/payment/payment.module').then(m => m.PaymentModule)

  },
  {

    path: 'paymentMethod',
    loadChildren: () => import('../app/view/payment-method/payment-method.module').then(m => m.PaymentMethodModule)

  }
  ,
  {

    path: 'testimonial',
    loadChildren: () => import('../app/view/tesimonal/tesimonal.module').then(m => m.TesimonalModule)

  }
  ,
  {

    path: 'cart',
    loadChildren: () => import('../app/view/cartitem/cartitem.module').then(m => m.CartitemModule)

  }
  ,
  {

    path: 'emp',
    loadChildren: () => import('../app/view/emp/emp.module').then(m => m.EmpModule)


  },
  {

    path: 'role',
    loadChildren: () => import('../app/view/role/role.module').then(m => m.RoleModule)

  },
  {

    path: 'waiter',
    loadChildren: () => import('../app/view/waiter/waiter.module').then(m => m.WaiterModule)

  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts copy/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)

      }
    ]
  },
  {
    path: "dashboard",
    redirectTo: "dashboard"
  },
  {
    path:'customer',
    loadChildren:()=>CustomersModule
  },
  {
    path:'about',
    component:AboutusComponent
  }

];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
