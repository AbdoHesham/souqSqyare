import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../profile/guard/auth.guard';
import { AboutUSComponent } from '../about-us/about-us.component';
import { CartComponent } from '../cart/cart.component';
import { CheckOutComponent } from '../cart/check-out/check-out.component';
import { FinalstepComponent } from '../cart/check-out/finalstep/finalstep.component';
import { ThanksComponent } from '../cart/check-out/thanks/thanks.component';
import { CategoryByIdComponent } from '../category-by-id/category-by-id.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { SingleProductComponent } from '../single-product/single-product.component';


const routes: Routes = [


  { path: '', redirectTo:'/home',pathMatch:'full' },

{ path: 'home', component: HomeComponent },
{ path: 'About-Us', component: AboutUSComponent },
{ path: 'Contact-Us', component: ContactUsComponent },
{ path: 'Cart', component: CartComponent },
{ path: 'product/:id', component: SingleProductComponent },
{ path: 'Category/:id', component: CategoryByIdComponent },
{ path: 'CheckOut', component: CheckOutComponent },
{ path: 'Finalstep', component: FinalstepComponent },


{ path: 'thanks', component: ThanksComponent },


{ path: '', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) ,canActivate :[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
