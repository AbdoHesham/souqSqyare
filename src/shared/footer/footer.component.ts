import { Component, OnInit } from '@angular/core';
import { FooterService } from '../service/service-footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public ftr : FooterService) { }

  ngOnInit(): void {
  }

}
