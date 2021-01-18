import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  headeroption;
  token;

  baseUrl=environment.baseUrl
  constructor(private http: HttpClient) {
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

  // api/Tbl_Product/5

  getProductById(id):Observable<any>{
    this.getToken();
    return this.http.get (`${this.baseUrl}products/${id}`,this.headeroption)
  }


    /////////// catigories

    getAllCateries() {
      this.getToken();
      return this.http.get(`${this.baseUrl}products/categories`, this.headeroption);
    }

    getAllProducts():Observable<any>{
      this.getToken();

      return this.http.get(`${this.baseUrl}products`, this.headeroption)
    }

    getProductsByCatID(catID:number):Observable<any>{
      this.getToken();
      return this.http.get(`${this.baseUrl}Tbl_Product/GetProdByCatId/${catID}`,this.headeroption)
    }



}
