import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/shared/service/Auth-service/auth.service';
import { HomeService } from 'src/shared/service/Home-Service/home.service';

import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import { CartService } from 'src/shared/service/Cart-Service/cart.service';
// import { AngularFireAuth } from  "angularfire2/auth";
// import firebase from 'firebase/app';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  product;
  TotalPrice = 0;
  AllTotalPrice;

  result;
  show: boolean = false;
  userCredentials = {};
  closeResult = '';
  CartItems=[];
  userData: {};
  createUser: FormGroup;
  userID;
  cartData={}
  data: any;
  DBlength: any;
  responce;
  cartDetails: { MemberID: any; ProductId: any; product_Quantity: number; Total_Price: any; };
  uid: any;
  memberId;
  CartDetailsID: any;
  id: any;
  CartId: any;
  Cartdata;
  constructor(
    public ftr: FooterService,
    public nav: NavService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    private fg: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private CartService: CartService,
    private fb: FormBuilder,
    // private afAuth:AngularFireAuth,
    // private HomeService:HomeService

  ) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.getFromLocalStorage()

    // this.getCartDetails()
    this.nav.show();
    this.ftr.hide();
    this.createUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      Repassword: ['', [Validators.required]],
    }, { validator: this.checkPasswords });
    console.log( this.createUser.valid)

  }

  public loginForm = this.fg.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  isLogged(){

    return this.authService.isLoggedIn;
  }

  getCartDetails(){
    if(localStorage.getItem('userdata')){
      this.memberId=JSON.parse(localStorage.getItem('userdata')).UserID

      this.CartService.getCartDetails(this.memberId).subscribe(
        res=>{
          this.Cartdata=res
          console.log(res);
          this.DBlength=this.Cartdata.length
        },
        err=>{
          console.log(err);
        }
      )
    }
    else {
      this.getFromLocalStorage()
    }


  }


  getFromLocalStorage() {
    const cs = localStorage.getItem('CartItems');
    if (cs === null) {
      //this.addToCart(this.CartItems);
      console.log("Cart items empty")
    } else {
      this.CartItems = JSON.parse(localStorage.getItem('CartItems'));

    }
  }



//----------------------functions for cart  logic ----------------------------

  totalPrice(price: number, count: number) {
     this.TotalPrice = price * count;
     return this.TotalPrice

  }



  ClearItem(id ) {
      let myArray=[]
      myArray =(JSON.parse( localStorage.getItem('CartItems')));
      myArray = myArray.filter( (v)=>{return v.ProductId != id.ProductId});
      localStorage.setItem('CartItems',JSON.stringify( myArray))
      this.CartItems.splice(id, 1)
      this.toastr.success(id.ProductName+' is deleted successfully ')

  }

  deleteItem(CartDetailsID){
    this.CartDetailsID= CartDetailsID
    console.log(this.CartDetailsID)
    this.CartService.deleteCartById(this.CartDetailsID).subscribe(
      res=>{

        this.toastr.success('item deleted successfully')
        this.getCartDetails()

      },
      err=>{
        this.toastr.error(err.message)
      }
    )
  }




  ClearAllItem(pid) {
    this.CartItems.splice(pid)
    localStorage.removeItem('CartItems');

  }

  reduceQty(id,CartDetailsID?) {
    if(!localStorage.getItem('userdata')){
      for (let i in this.CartItems) {
        if (this.CartItems[i].ProductId === id) {
          this.CartItems[i].qty--

        }
      }
    }

    else {
      this.CartDetailsID=CartDetailsID
      console.log(this.CartDetailsID)
   for (let i in this.data) {
        if (this.data[i].ProductId === id) {
          console.log(this.data[i].ProductId);
          this.data[i].product_Quantity--
        }
      }
    }


  }

  increaseQty(id) {
    if(!localStorage.getItem('userdata')){
      for (let i in this.CartItems) {
        if (this.CartItems[i].ProductId === id) {
          this.CartItems[i].qty++
        }
      }
    }

    else {
      for (let i in this.data) {
           if (this.data[i].ProductId === id) {
             this.data[i].product_Quantity++
           }
         }
       }
  }



//----------------------functions for cart  logic ----------------------------



// functions for open modal and login and external login

  showPass() {
    this.show = !this.show;
  }

  // condFun(content ) {
  //   if (localStorage.getItem('userdata')) {

  //     this.addtoCheckOut(this.CartId)

  //     this.router.navigateByUrl('/CheckOut');
  //   } else {
  //     this.open(content)

  //   }
  // }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.responce=localStorage.getItem('CartItems')
    this.uid=localStorage.getItem('userdata')
    this.CartService.addToCard(this.responce).subscribe(
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
if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  login() {

    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.userCredentials = {
      email: email,
      password: password,
      type: "user"
    };
    if (this.loginForm.controls.email.invalid) {
      this.toastr.error("Please Enter Valid Email")
    }
    else if (this.loginForm.controls.password.invalid) {
      this.toastr.error("Please Enter Valid password")
    }
    else {
      this.authService.signIn(this.userCredentials).subscribe(
        res=>{
            localStorage.setItem('userdata',  JSON.stringify(this.userCredentials));
            //just for development
            this.toastr.success("you are log in successfully");
            this.loginForm.reset();
            this.modalService.dismissAll();
            this.router.navigateByUrl('/CheckOut');
            JSON.parse( localStorage.getItem('userdata'));

        },
        err => {
          this.toastr.error("your Email or password is error ")
        }
      );
    }
  }

    //check password
    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let password = group.get('password').value;
    let Repassword = group.get('Repassword').value;
    return password === Repassword ? null : { notSame: true }
  };


  onSubmit(){
    this.userData = {
      name: this.createUser.controls.name.value,
      email: this.createUser.controls.email.value,
      password: this.createUser.controls.password.value,
      Repassword: this.createUser.controls.Repassword.value,
      type: "user"
    };
    if (this.createUser.invalid) {
      return this.toastr.error(
        "Please enter correct Name!"
      );

    }



    else {this.authService.register(this.userData).subscribe(
      res=>{
        localStorage.setItem('userdata',  JSON.stringify(this.userData));
        this.loginForm.reset();
        this.modalService.dismissAll();
        this.router.navigateByUrl('/CheckOut');
        this.toastr.success("you have create account successfully");
        JSON.parse( localStorage.getItem('userdata'));


      },
      err=>{
        console.log(err);
        this.toastr.error(err.error.message);
      }

    )
  }}

//   googleLogin(){
//     //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
//     return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
//  }

//  AuthLogin(provider) {
//   return this.afAuth.auth.signInWithPopup(provider)
//     .then((result) => {
//       localStorage.setItem('userdata',  JSON.stringify(result))
//       this.router.navigateByUrl('/CheckOut');
//       this.toastr.success('You have been successfully logged in!');
//       this.createUser.reset();
//       this.loginForm.reset();
//       this.modalService.dismissAll();
//     }).catch((error) => {
//        this.toastr.error("Can not login")
//    })
//   }



  // functions for open modal and login and external login
addtoCheckOut(){

      this.CartId=JSON.parse(localStorage.getItem('userdata')).cartId[0].CartId
this.CartService.addToCheckOutPage(this.CartId).subscribe(
  res=>{
    console.log(res)
    this.router.navigateByUrl('CheckOut')
  },
  err=>{
    console.log(err)
    this.toastr.error('some thing went error!')
  }
)


}




}

