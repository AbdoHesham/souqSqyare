import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NavService } from '../service/service-nav/nav.service';

import { AuthService } from '../service/Auth-service/auth.service';
import { SearchService } from '../service/search-service/search.service';

import { Iproduct } from '../models/Iproduct';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  products:Iproduct;
  count:number
  constructor(
    private router: Router,
    private toastr: ToastrService,
    public nav: NavService,
    private authService: AuthService,
    public SearchService: SearchService

  ) {}

  ngOnInit(): void {
    this.count= JSON.parse(localStorage.getItem('CartItems')).length;
    console.log(this.count);

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
