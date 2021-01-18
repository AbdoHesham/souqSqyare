import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/shared/service/service-footer/footer.service';
import { NavService } from 'src/shared/service/service-nav/nav.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public nav: NavService,public ftr:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.ftr.hide()


  }

}
