import { Injectable } from '@angular/core';
import { Icategory } from '../../models/Icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
MobileCateg:Icategory[];
ClothesCateg:Icategory[];

  constructor() {
    this.MobileCateg=[{id:1,name:"Iphone"},{id:2,name:"Samsung"},{id:3,name:"Nokia"},
    {id:4,name:"Oppo"},{id:5,name:"Xiaomi"},
  ];

  this.ClothesCateg=[{id:6,name:"Pants"},{id:7,name:"T-Shirts"},{id:8,name:"Shose"},
    {id:9,name:"Jackit"},{id:10,name:"Under Wears"},
  ]

  }

  getMobileCategs():Icategory[]{
    return this.MobileCateg;
  }

  getClothesCategs():Icategory[]{
    return this.ClothesCateg;
  }

}
