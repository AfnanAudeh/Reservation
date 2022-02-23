import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role-service';

@Component({
  selector: 'app-getlist-role',
  templateUrl: './getlist-role.component.html',
  styleUrls: ['./getlist-role.component.css']
})
export class GetlistRoleComponent implements OnInit {

  list:any[]=[];
  constructor(private roleService:RoleService){}

  ngOnInit(): void {
    this.GetAllRole();
  }

  GetAllRole(){
   this.roleService.GetAllRole().subscribe((res:any[])=>{
    this.list=res; 
    console.log(res)
           });
  }
  DeleteRole(id:number){
   this.roleService.DeleteRoleById(id).subscribe(res=>{console.log(res);this.GetAllRole();});
  }


}
