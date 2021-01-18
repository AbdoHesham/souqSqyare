import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(    public ftr: FooterService,
    public nav: NavService,) { }

  ngOnInit(): void {

    this.nav.show();
    this.ftr.hide();
  }

}
