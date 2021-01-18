import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;
  public subscriptions: Subscription[] = [];
  public connectionStatusMessage: string;
  public connectionStatus: string;
    title = 'itiFinalProject';
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');
    this.subscriptions.push(this.onlineEvent.subscribe(event => {
        this.connectionStatusMessage = 'Connected to internet! You are online';
        this.toastr.success(this.connectionStatusMessage)
        this.connectionStatus = 'online';
    }));
    this.subscriptions.push(this.offlineEvent.subscribe(e => {
        this.connectionStatusMessage = 'Connection lost! You are offline';
        this.toastr.error(this.connectionStatusMessage)
        this.connectionStatus = 'offline';
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
}




  }


