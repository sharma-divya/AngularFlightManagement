import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map, BehaviorSubject  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../Component/login/login.component.model';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private currentUserSubject :BehaviorSubject<any>;
  public currentUser: Observable<any>;

  baseUrl ="http://localhost:9050/"
  loginurl = "flight/user/login"
  registerurl ="flight/user/Register"
  
  constructor(private http : HttpClient) {
    var userInfo = localStorage.getItem("UserInfo");
    if(userInfo){
      this.currentUserSubject = new BehaviorSubject<LoginModel>(JSON.parse(userInfo));
      this.currentUser = this.currentUserSubject.asObservable();
    }
    else{
      this.currentUserSubject = new BehaviorSubject<any>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
   }
  // Login(data:any) : Observable<any>{
  //   return this.http.post(this.baseUrl+this.loginurl,data)
  // }
  getCurrentUser():LoginModel {
    return this.currentUserSubject.value;
  }
  
  validateUser(params:any): Observable<any>
  {
    var endPoint = this.baseUrl + this.loginurl
    return this.http.post<any>(endPoint,params)
    .pipe(map(data => {
      if(data)
      {
        if(data.statusCode === environment.statusCode401)
        {
          alert(data.message);
          localStorage.removeItem("UserInfo");
          this.currentUserSubject.next(null);
          return;
        }
        localStorage.setItem("UserInfo",JSON.stringify(data));
        this.currentUserSubject.next(data);
      }
      return data;
    }));
  }
  


Register(userDetails : any) : Observable<any>
{
  var endPoint = this.baseUrl + this.registerurl

  return this.http.post(endPoint,userDetails);
}

logout(){
  localStorage.removeItem("UserInfo");
  this.currentUserSubject.next(null);
}
}
