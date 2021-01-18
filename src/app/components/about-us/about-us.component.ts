import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import {developers}from '../../../shared/models/about-us-Model'
import SwiperCore from "swiper/core";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUSComponent implements OnInit{
heros:developers[];
// mySwiper: Swiper;

  constructor(public nav: NavService) {
    this.heros=[
      {Name:"Abdelrahman Hesham",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/a2.jpg",emailUrl:"https://www.linkedin.com/in/abdo-hesham-969991163/"},
      {Name:"Abdelrahman ahmed",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/ww.jpeg",emailUrl:"https://www.linkedin.com/in/abdelrahman-ahmed-55b1a213a/"},
      {Name:"Ail Ashraf ",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/kk.jpeg",emailUrl:"https://www.linkedin.com/in/abdo-hesham-969991163/"},
      {Name:"Gahed Nasser",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/img_avatar2.png",emailUrl:"https://www.linkedin.com/in/abdo-hesham-969991163/"},
      {Name:"Mohed Fawzy",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/tt.jpg",emailUrl:"https://www.linkedin.com/in/abdo-hesham-969991163/"},
      {Name:"Heba Ahmed",possion:"Softwere Engineer" ,imageUrl:"../../../assets/img/heros/img_avatar2.png",emailUrl:"https://www.linkedin.com/in/abdo-hesham-969991163/"},

    ]
   }

  ngOnInit() {

    this.nav.show()
  }

  // onSwiper(swiper) {
  //   console.log(swiper)
  // }
  // onSlideChange() {
  //   console.log('slide change')
  // }



}
