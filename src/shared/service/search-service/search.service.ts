import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

   value: Subject<string> = new Subject;
  // public content = new BehaviorSubject<any>(name);    
  // public share = this.content.asObservable();    
  // public Employeename = [];    
  constructor() { }    



}