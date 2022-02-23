import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoleService } from 'src/app/services/role-service';

import { Role } from 'src/data/role';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private roleService:RoleService) { }

name=new FormControl();

  ngOnInit(): void {
  }

  InsertRole(){
 let role:Role=new Role();
 role.Role_Name=this.name.value;

 console.log(this.name.value)
 this.roleService.InsertRole(role).subscribe(res=>{
 console.log(res);
});
  }


}
