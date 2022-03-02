import { Component, OnInit } from "@angular/core";
import { GetTablesComponent } from "src/app/view/table/get-tables/get-tables.component";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/GetTable",
    title: "Resturant Tables",
    rtlTitle: "طاولات المطعم",
    icon: "icon-app",
    class: ""
  },
  {
    path: "/GetReservations",
    title:"Reservations",
    rtlTitle: "",
    icon: "icon-book-bookmark",
    class: ""
  },
  {
    path:'/about',
    title:"AboutUs",
    rtlTitle: "",
    icon: "icon-paper",
    class: ""
  },
  {
    path:"/contactUsInfo",
    title:"Contact Us Information",
    rtlTitle: "",
    icon: "icon-mobile",
    class: ""
  },
  {
    path:"/GetCustomers",
    title:"Customers",
    rtlTitle: "",
    icon: "icon-badge",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[]=[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
