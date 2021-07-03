import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import{InterceptorInterceptor}from '../shared/interceptor/interceptor.interceptor'
import { LayoutRoutingModule } from './components/layout/layout-routing.module';
import { AuthGuard } from 'src/shared/service/Auth-service/auth-guard.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/* Firebase services */


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(), // ToastrModule added


  ],
  providers: [
      {  provide:LocationStrategy , useClass:HashLocationStrategy , multi: true },
      AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
