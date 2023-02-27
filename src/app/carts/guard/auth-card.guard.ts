import { AuthService } from '../../Auth-Service/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCardGuard implements CanActivate{

constructor(private _AuthService:AuthService,private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if(this._AuthService.userData.getValue())
{
  return true;
}
else
{
  this._Router.navigate(['/login']);
return false;

}

    }

}
