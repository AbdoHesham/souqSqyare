import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';
import { ComplainService } from 'src/shared/service/complainService/complain.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/service/Auth-service/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  complainData = {};
  data: any;

  constructor(
    private toastr: ToastrService,
    public ftr: FooterService,
    public nav: NavService,
    private fg: FormBuilder,
    private authService: AuthService,
    private ComplainService :ComplainService
  ) {}
  public complainForm = this.fg.group({

    UserName: ['', [Validators.required]],
    UserEmail: ['', [Validators.required , Validators.email] ],
    UserPhone: ['', [Validators.required, Validators.minLength(11)] ],
    complainText: ['', [Validators.required]],

  });

  ngOnInit(): void {
    this.nav.show();
    this.ftr.hide();
  }


  sendComplian() {
    const UserName = this.complainForm.controls.UserName.value;
    const UserEmail = this.complainForm.controls.UserEmail.value;
    const UserPhone = this.complainForm.controls.UserPhone.value;
    const ComplainText = this.complainForm.controls.complainText.value;

    this.complainData={
      UserName:UserName,
      UserEmail:UserEmail,
      UserPhone:UserPhone,
      ComplainText:ComplainText

    }

    if (this.complainForm.controls.UserName.invalid) {
      return this.toastr.error(
        "Please enter correct Name!"
      );

    }
    else   if (this.complainForm.controls.UserEmail.invalid) {
      return this.toastr.error(
        "Please enter correct email!"
      );

    }

    else   if (this.complainForm.controls.UserPhone.invalid) {
      return this.toastr.error(
        "Please enter correct phone!"
      );

    }
    else   if (this.complainForm.controls.complainText.invalid) {
      return this.toastr.error(
        "Please enter correct message!"
      );
  }
  else {
    this.ComplainService.sendNewComplian(this.complainData).subscribe(

      (res) => {
        this.data = res;
        this.toastr.success('your Message sent successfully ');
        this.complainForm.reset()
      },
      (err) => {
        this.toastr.error(err.error.Message);
      }
    );
  }

  }





}
