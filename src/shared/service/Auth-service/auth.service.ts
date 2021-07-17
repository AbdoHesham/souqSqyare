import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  headeroption;
  token;
  isLoggedIn$:Observable<boolean>
  baseUrl=environment.loginUrl
  OAuthProvider: any;

  // api/login
  constructor(private http: HttpClient,
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

  get isLoggedIn() {
    if (localStorage.getItem('userdata')) {
      return true;
    }
    return false
  }

  signIn($userCredentials): Observable<any> {
    return this.http.post(`${this.baseUrl}api/login`, $userCredentials);
  }
  register($userData): Observable<any> {
    return this.http.post(`${this.baseUrl}api/Register`, $userData);
  }

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
    }

}
