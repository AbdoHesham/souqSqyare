import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import { CartService } from 'src/shared/service/Cart-Service/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  OrderDetailsForm: FormGroup;
  DBlength: any;
  data: any;
  memberId: any;
  TotalPrice: number;
  CartId: any;

  constructor(
    public ftr: FooterService,
    public nav: NavService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.totalPrice(this.TotalPrice)
    // this. getCartDetails();
    this.nav.show();
    this.ftr.show();
    this.OrderDetailsForm = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
        ],
      ],
      Payment_Type: ['', [Validators.required]],
    });
    console.log(this.OrderDetailsForm.valid);
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


  totalPrice(price: number) {
    this.TotalPrice += price ;
    return this.TotalPrice

 }

  SendNewOrder() {
    this.CartId=JSON.parse(localStorage.getItem('userdata')).cartId[0].CartId
    const OrderDetails={
      address:this.OrderDetailsForm.controls.address.value,
      city:this.OrderDetailsForm.controls.city.value,
      state:this.OrderDetailsForm.controls.state.value,
      ZipCode:this.OrderDetailsForm.controls.zip.value,
      phone:this.OrderDetailsForm.controls.phone.value,
      Payment_Type:this.OrderDetailsForm.controls.Payment_Type.value,
      MemberId:this.memberId,
      CartId:this.CartId

    }
    if (this.OrderDetailsForm.invalid) {
      this.toastr.error('please enter valid Data !!');
    } else {
        this.CartService.createNewOrder(OrderDetails).subscribe(
          (res) => {
            console.log(res);
            localStorage.setItem('shippingDetailsID',  JSON.stringify(res));

            localStorage.setItem('shippingDetails',  JSON.stringify(OrderDetails));
            localStorage.removeItem('CartItems');
            this.router.navigateByUrl('/Finalstep');
          },
          (err) => {
            this.toastr.error(err.message)
          }
        );
    }
  }
}
