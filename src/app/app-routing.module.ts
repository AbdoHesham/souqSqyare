import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { AuthGuard } from '../shared/service/Auth-service/auth-guard.service';

const routes: Routes = [
  // ,canActivate: [AuthGuard]
  { path: '', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)  },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },


{path:'**',component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
