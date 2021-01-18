import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headeroption;
  token;

  baseUrl=environment.baseUrl
  constructor(
    private http: HttpClient,
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


  addToCard(body):Observable<any>{
  this.getToken();
return this.http.post(`${this.baseUrl}Cart_Details/PostCart_Details`,body,this.headeroption)
}



addToCheckOutPage(CartId):Observable<any>{
  this.getToken();
  return this.http.post(`${this.baseUrl}Tbl_Cart/PostTbl_Cart/${CartId}`,this.headeroption)

}




getCartDetails(memberId):Observable<any>{
  this.getToken();

  return this.http.get(`${this.baseUrl}Cart_Details/GetCart_Details/${memberId}`,this.headeroption)
}

deleteCartById(id):Observable<any>{
  this.getToken();

  return this.http.delete(`${this.baseUrl}Cart_Details/DeleteCart_Details/${id}`,this.headeroption)
}


// service for checkout page

createNewOrder(orderDetails):Observable<any>{
  this.getToken()
  return this.http.post(`${this.baseUrl}Tbl_ShippingDetails/PostTbl_ShippingDetails`,orderDetails,this.headeroption)
}

// get shipping details by userId
getShippingDetailsByUserId(userID):Observable<any>{
  this.getToken()

  return this.http.get(`${this.baseUrl}Tbl_ShippingDetails/GetShippingByMemberId/${userID}`,this.headeroption)

}


}
