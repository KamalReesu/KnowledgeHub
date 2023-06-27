import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private serv:MyserviceService, private router: Router ) {};
  canActivate() {
    // if (!this.serv.isAuthenticated) {
    //   this.router.navigate(['home']);
    //   return false;
    // }
     return true;
    
}
  
}
