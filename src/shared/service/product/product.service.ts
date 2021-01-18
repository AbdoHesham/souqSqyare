import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/shared/models/Iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headeroption;
  token;

  baseUrl=environment.baseUrl
  constructor(    private toastr: ToastrService,
    private http: HttpClient
    ) {
      this.getToken();
    }


    getToken() {
      // this.token = localStorage.getItem('SouqSquareToken');
      this.headeroption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // Authorization: `${this.token}`,
        }),
      };
    }


}
