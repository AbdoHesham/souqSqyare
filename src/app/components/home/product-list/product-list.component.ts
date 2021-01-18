import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Iproduct}from'../../../../shared/models/Iproduct';
import {HomeService}from'../../../../shared/service/Home-Service/home.service';
import { CartService } from 'src/shared/service/Cart-Service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() Category: number;

  productLst = [];
  data: any;
  userID: any;
  CartDetailsID:any
cartDetails={}
  CartId: any;
  constructor(
    private HomeService:HomeService,
    private toastr: ToastrService,
    private CartService: CartService,

    ) { }

  ngOnInit(): void {
this. getProducts();
  }
//
getProducts(){
  this.HomeService.getAllProducts().subscribe(
    res=>{
      this.data=res
      console.log(this.data);
      // for (let i in this.data) {
      //   this.CartDetailsID = this.data[i]['Cart_Details'][0].CartDetailsID;
      //   console.log(this.CartDetailsID)
      // }

    },
    err=>{
      console.log(err);

    }
  )
}

addProduct(product: Iproduct ) {
  if(!localStorage.getItem('userdata')){
    let productItems = [];
    if (localStorage.getItem('CartItems')) {
      productItems = JSON.parse(localStorage.getItem('CartItems')); // get product list

      for (let i in productItems) {
        if (productItems[i].ProductId === product.ProductId) {
          this.toastr.error('you are trying to Add item already in card !')
          return localStorage.setItem('CartItems', JSON.stringify(productItems));

        }

      }
    }
    productItems.push(
      {
        ProductId: product.ProductId,
        ProductName: product.ProductName,
        Description: product.Description,
        Price: product.Price,
        Quantity: product.Quantity,
        ProductImage: product.ProductImage,
        qty: 1
      }
    );
    localStorage.setItem('CartItems', JSON.stringify(productItems));
    this.toastr.success("item added  succesfully")
    //Changing the number of Quantity when press Add
  }
  else{
    this.CartId=JSON.parse(localStorage.getItem('userdata')).cartId[0].CartId
console.log(this.CartId);

    this.userID= JSON.parse(localStorage.getItem('userdata')).UserID

    this.cartDetails={
      MemberID:this.userID,
      ProductId:product.ProductId,
      product_Quantity:1,
      Total_Price: product.Price,
      CartId:this.CartId

    }
    console.log(this.cartDetails);

this.CartService.addToCard(this.cartDetails).subscribe(
  res=>{
console.log(res)
this.toastr.success("item added successfully")
  },
  err=>
  {
    console.log(err)
    this.toastr.error('some thing went error ')
  }
  )

  }


}


// addProductinlogin(product: Iproduct){
//   let productItems = [];
//     if (localStorage.getItem('CartItems')) {
//       productItems = JSON.parse(localStorage.getItem('CartItems')); // get product list

//       for (let i in productItems) {
//         if (productItems[i].ProductId === product.ProductId) {
//           this.toastr.error('you are trying to Add item already in card !')
//           return localStorage.setItem('CartItems', JSON.stringify(productItems));

//         }

//       }
//     }
//     productItems.push(
//       {
//         CartDetailsID:product.CartDetailsID,
//         ProductId: product.ProductId,
//         ProductName: product.ProductName,
//         Description: product.Description,
//         Price: product.Price,
//         Quantity: product.Quantity,
//         ProductImage: product.ProductImage,
//         qty: 1
//       }
//     );
//     localStorage.setItem('CartItems', JSON.stringify(productItems));
// }





}
