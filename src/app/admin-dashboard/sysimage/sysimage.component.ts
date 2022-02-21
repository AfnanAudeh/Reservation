import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SysImagesService } from 'src/app/services/sys-images.service';

@Component({
  selector: 'app-sysimage',
  templateUrl: './sysimage.component.html',
  styleUrls: ['./sysimage.component.css']
})
export class SysimageComponent implements OnInit {
  CreateForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    imagename: new FormControl('')
  });
  constructor(private sysImageService: SysImagesService) { }

  ngOnInit(): void {
  }


 

  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    console.log(fileToUpload);
    
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.sysImageService.uploadImage(formData);

  }
  Create() {
    const obj = {
      image_Name: this.CreateForm.value.name,
      image_Path: this.CreateForm.value.imagename,
    }
    debugger
     this.sysImageService.Create(obj);
  }
}

