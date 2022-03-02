import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { GetTablesComponent } from "src/app/view/table/get-tables/get-tables.component";
import { AboutusComponent } from "src/app/view/aboutus/aboutus.component";
import { GetReservationsComponent } from "src/app/view/reservations/get-reservations/get-reservations.component";
import { ContactusinfoComponent } from "src/app/view/contactusinfo/contactusinfo.component";
import { GetCustomersComponent } from "src/app/view/customers/get-customers/get-customers.component";
import { EditTableComponent } from "src/app/view/table/edit-table/edit-table.component";




export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "GetTable", component: GetTablesComponent },
  { path: "GetReservations", component: GetReservationsComponent },
  { path: "about", component: AboutusComponent },
  {path:"contactUsInfo",component:ContactusinfoComponent},
  {path:"GetCustomers",component:GetCustomersComponent}

];
