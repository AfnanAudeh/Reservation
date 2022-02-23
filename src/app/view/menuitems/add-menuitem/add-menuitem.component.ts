import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuitemService } from 'src/app/services/menuitem.service';

import { MenuItem } from 'src/data/menuItem';

@Component({
  selector: 'app-add-menuitem',
  templateUrl: './add-menuitem.component.html',
  styleUrls: ['./add-menuitem.component.css']
})
export class AddMenuitemComponent implements OnInit {

  constructor(private menuItemService:MenuitemService) { }

  insertMenuItemForm= new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    content:new FormControl(),
    menuId:new FormControl(),
    quantity:new FormControl(),
    image:new FormControl()
  });

  addMenuItem(){
let menuItem:MenuItem=new MenuItem();
menuItem.Menu_Item_Name=this.insertMenuItemForm.controls['name'].value;
menuItem.Menu_Item_Content=this.insertMenuItemForm.controls['content'].value;
menuItem.Menu_Item_Price=Number.parseInt(this.insertMenuItemForm.controls['price'].value);
menuItem.Menu_Id=Number.parseInt(this.insertMenuItemForm.controls['menuId'].value);
console.log(menuItem.Menu_Item_Name)
this.menuItemService.addMenuItem(menuItem).subscribe(res=>{
  console.log(res);
})
  }

  ngOnInit(): void {

  }

}
