import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  headeroption;
  token;
  baseUrl="https://localhost:44316/api/"

  constructor(private http: HttpClient) {
this.getToken()
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


  sendNewComplian(Complain):Observable<any>{
    this.getToken();
    return this.http.post(`${this.baseUrl}Complaines/PostComplain`,Complain,this.headeroption)
  }



}
