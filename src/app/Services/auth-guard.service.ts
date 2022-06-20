import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router, private loginService : LoginserviceService) { }
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    const userInfo = this.loginService.getCurrentUser();

    if(userInfo)
    {
      return true;
    }

    this.router.navigate(["/userlogin"]);
    return false;
  }
}
