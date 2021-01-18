import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import {FooterService}from '../../../shared/service/service-footer/footer.service';
import{Icategory}from '../../../shared/models/Icategory'
import{CategoryService}from'../../../shared/service/CategroyService/category.service'
import { HomeService } from 'src/shared/service/Home-Service/home.service';
import { ToastrService } from 'ngx-toastr';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  SelectedCategory:number;
  PhoneCateg:Icategory[];
  WearsCateg:Icategory[];
  cartItems=[];
  cartTotal=0;
  CatData;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public ftr : FooterService,
    public nav: NavService,
private HomeService:HomeService,
    // private categ:CategoryService,
    private toastr: ToastrService,
    config: NgbCarouselConfig

    ) {
        // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    }

  ngOnInit() {
    this. getAllCatigories()
    // this.PhoneCateg=this.categ.getMobileCategs();
    // this.WearsCateg=this.categ.getClothesCategs();
    // this.SelectedCategory=0;
    this.nav.show();
    this.ftr.show();
  }

    //get All  Catigories to show in DropDown
    getAllCatigories() {

      this.HomeService.getAllCateries().subscribe(
        (res) => {
          this.CatData = res
          console.log(this.CatData)
        }
        ,
        (err) => {
          console.log(err);
          this.toastr.error(err.error.message)
        }
      )
    }





}
