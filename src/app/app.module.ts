import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexService } from './services/index.service';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  exports:[MatDialogModule,MatFormFieldModule],
  providers: [IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
