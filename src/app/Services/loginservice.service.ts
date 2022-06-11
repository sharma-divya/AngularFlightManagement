import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseUrl ="http://localhost:9050/"
  loginurl = "flight/user/login"
  constructor(private http : HttpClient) { }
  Login(data:any) : Observable<any>{
    return this.http.post(this.baseUrl+this.loginurl,data)
  }
}
