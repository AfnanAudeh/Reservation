import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TableServiceService } from 'src/app/services/table-service.service';
import { TableClass } from 'src/app/shared/table-class.model';

@Component({
  selector: 'app-get-tables',
  templateUrl: './get-tables.component.html',
  styleUrls: ['./get-tables.component.css']
})
export class GetTablesComponent implements OnInit {

  tables!: TableClass[];
  image: any = [];
  imagePaths: any = [];
  sanitizedImageData: any = [];
  constructor(private tableService: TableServiceService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.GetAllTables();

  }
  GetAllTables() {
    this.tableService.GetTables().subscribe(result => {
      this.tables = result
      this.GetImagesPath(this.tables);
    });
  }
  GetImagesPath(value: any[]) {

    for (let i = 0; i < value.length; i++) {
      this.imagePaths[i] = value[i].image_Location;
    }
    // this.GetImages(this.imagePaths);
  }
  GetImages(imageName: string[]) {
    this.tableService.GetImage(imageName)
      .subscribe(
        (data: any) => {
          this.image = 'data:image/jpg;base64,' + data;
          this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.image);
        }
      );
  }
  AddTable() {
    this.router.navigate(['Tables/AddTable']);
  }
  EditTable() {
    this.router.navigate(['Tables/EditTable']);
  }
  DeleteTable(id?: number) {
    this.tableService.DeleteTable(id).subscribe();
  }

}