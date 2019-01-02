import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {UserModule} from './../app/user/user.module';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot()

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
