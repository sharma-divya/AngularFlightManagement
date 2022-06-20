import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';
import { HttpEvent, HttpHandler , HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor( private loginService: LoginserviceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    var currentUser = this.loginService.getCurrentUser();
    if(currentUser && currentUser.token){

      request = request.clone({
        setHeaders :{
          Authorization : "Bearer " + currentUser.token
        }
      });
    }
    return next.handle(request);
  }
}
