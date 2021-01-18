import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/shared/models/Iproduct';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import { HomeService } from '../../../shared/service/Home-Service/home.service';
import { CartService } from 'src/shared/service/Cart-Service/cart.service';

@Component({
  selector: 'app-category-by-id',
  templateUrl: './category-by-id.component.html',
  styleUrls: ['./category-by-id.component.scss'],
})
export class CategoryByIdComponent implements OnInit {
  id: any;
  category: any;
  CatName: any;
  totalLenght = 0;
  cartDetails: { MemberID: any; ProductId: number; product_Quantity: number; Total_Price: number;  CartId: any; };
  userID: any;
  CartId: any;

  constructor(
    private _activedRoute: ActivatedRoute,
    private HomeService: HomeService,
    private toastr: ToastrService,
    public ftr: FooterService,
    public nav: NavService,
    private CartService: CartService,

  ) {}

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getProductsByCatID();
    this.ftr.hide();
    this.nav.show();
  }
  getProductsByCatID() {
    this.HomeService.getProductsByCatID(this.id).subscribe(
      (res) => {
        this.category = res;
        console.log(this.category);
        this.CatName = this.category[0].Tbl_Category.CategoryName;
        this.totalLenght = this.category.length;
      },
      (err) => {
        console.log(err);
      }
    );
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


}
