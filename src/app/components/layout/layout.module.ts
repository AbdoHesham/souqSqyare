import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { AboutUSComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { CartComponent } from '../cart/cart.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { SingleProductComponent } from '../single-product/single-product.component';
import { CheckOutComponent } from '../cart/check-out/check-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '../home/product-list/product-list.component';
import { CategoryByIdComponent } from '../category-by-id/category-by-id.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ThanksComponent } from '../cart/check-out/thanks/thanks.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FinalstepComponent } from '../cart/check-out/finalstep/finalstep.component';

@NgModule({
  declarations: [LayoutComponent,
    HomeComponent,
    AboutUSComponent,
    ContactUsComponent,
     CartComponent,
     SingleProductComponent,
    CheckOutComponent,
    ProductListComponent,
    CategoryByIdComponent,
    ThanksComponent,
    FinalstepComponent,



  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxShimmerLoadingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule
    // AngularFireAuthModule,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // SwiperModule
  ]
})
export class LayoutModule { }
