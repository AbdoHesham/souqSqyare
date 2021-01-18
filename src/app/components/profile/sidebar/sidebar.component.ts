import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  element: any;
  active = 'top';
  username;
links=[]
  constructor() {this.links=[
    {routerLink:"personalinfo",class:"list-group-item list-group-item-action bg-light",Name:"Personalinfo"},
    {routerLink:"orders",class:"list-group-item list-group-item-action bg-light",Name:"Orders"},
    {routerLink:"addresses",class:"list-group-item list-group-item-action bg-light",Name:"Addresses"},
    {routerLink:"cliams",class:"list-group-item list-group-item-action bg-light",Name:"Cliams"},
    {routerLink:"orders",class:"list-group-item list-group-item-action bg-light",Name:"Orders"},


  ]
// this.username=JSON.parse( localStorage.getItem('userId' )).Name;
}

  ngOnInit(): void {


  }

   channelChanged(e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
}

}
