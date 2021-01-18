import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/shared/service/Cart-Service/cart.service';

@Component({
  selector: 'app-finalstep',
  templateUrl: './finalstep.component.html',
  styleUrls: ['./finalstep.component.scss']
})
export class FinalstepComponent implements OnInit {
data;
TotalPrice;
  memberId: any;
  DBlength: any;
  shippingDetails=[]
  address: any;
  city: any;
  state: any;
  ZipCode: any;
  Payment_Type: any;
  phone: any;
  cartDetailsId: any;
  constructor(    private CartService: CartService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getCartDetails();
    this.getShippingDetailsByUserId();
  }

  getCartDetails(){
    this.memberId=JSON.parse(localStorage.getItem('userdata')).UserID

    this.CartService.getCartDetails(this.memberId).subscribe(
      res=>{
        this.data=res
        console.log(res);

        this.DBlength=this.data.length
      },
      err=>{
        console.log(err);
      }
    )



}

getShippingDetailsByUserId(){
 this.address=JSON.parse(localStorage.getItem('shippingDetails')).address;
 this.city=JSON.parse(localStorage.getItem('shippingDetails')).city;
 this.state=JSON.parse(localStorage.getItem('shippingDetails')).state;
 this.ZipCode=JSON.parse(localStorage.getItem('shippingDetails')).ZipCode;
 this.phone=JSON.parse(localStorage.getItem('shippingDetails')).phone;
 this.Payment_Type=JSON.parse(localStorage.getItem('shippingDetails')).Payment_Type;

//  from data base
if (window.confirm('Are you sure you want to complete this order?')) {
  this.CartService.getShippingDetailsByUserId(this.memberId).subscribe(
    res=>{
  //     this.cartDetailsId=res.CartDetailsID
  // console.log(this.cartDetailsId)
  this.router.navigateByUrl('thanks')
  this.toastr.success('done')
      // localStorage.setItem('cartDetailsId',  JSON.stringify(this.cartDetailsId));

    },
    err=>{
      console.log(err);

    }
  )
}


}


}
