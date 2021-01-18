import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NavService } from '../service/service-nav/nav.service';

import { AuthService } from '../service/Auth-service/auth.service';
import { Iproduct } from '../models/Iproduct';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  products:Iproduct;
  count=[]
  constructor(
    private router: Router,
    private toastr: ToastrService,
    public nav: NavService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.count= JSON.parse(localStorage.getItem('CartItems'));
  }

  logout() {
    if  (localStorage.getItem("userdata")) {
      localStorage.clear()

    }
    this.toastr.success("you are logout successfully")
    this.router.navigateByUrl('/home');
  }

isLogged(){

  return this.authService.isLoggedIn;
}

// searchInputonKey(){
// this.products=this.products.ProductName.filter(
//   res=>{
//     res.ProductName.toLocaleLowerCase()
//   }
//   )
// }

}
