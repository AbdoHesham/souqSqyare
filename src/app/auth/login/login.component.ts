import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpResponse } from "@angular/common/http";
import { AuthService } from "../../../shared/service/Auth-service/auth.service";
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { AngularFireAuth } from  "angularfire2/auth";
import firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  userCredentials = {};
  show: boolean=false
  data: any;

  constructor(private router: Router,
    public ftr : FooterService,
    private fg: FormBuilder,
    public authService: AuthService,
    private toastr: ToastrService,
    private afAuth:AngularFireAuth



  ) { }
  public  loginForm = this.fg.group({
    email: ["", [
      Validators.required,
      Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit() {
    this.ftr.hide()

  }

  requiredErrorMessage($feild) {
    return this.loginForm.controls[$feild].hasError("required")
      ? "You must enter a value"
      : "";
  }

  showPass(){
    this.show = !this.show;
  }

  // facebookLogin(){
  //   //this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //   return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  // }

  googleLogin(){
     //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
     return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
   return this.afAuth.auth.signInWithPopup(provider)
     .then((result) => {
       localStorage.setItem('userdata',  JSON.stringify(result))
         this.router.navigateByUrl('/');
         this.toastr.success('You have been successfully logged in!');

     }).catch((error) => {
        this.toastr.error("Can not login")
    })
   }


  login() {
    const email = this.loginForm.controls.email.value.toString();
    const password = this.loginForm.controls.password.value.toString();
    this.userCredentials = {
      email: email,
      password: password,

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
             localStorage.setItem('userdata',  JSON.stringify(res));
            //just for development
            this.toastr.success("you are logged in successfully");
            this.router.navigateByUrl('/');
            JSON.parse( localStorage.getItem('userdata'));
          },
        err => {
          this.toastr.error(err.error.message)
        }
      );
    }
  }





}
