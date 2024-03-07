import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private route:Router) { }
  canActivate( ): boolean{
    if(localStorage.getItem('token'))
    {
      return true;
    }
    else
    {
      this.route.navigate(['/login']);
      return false;
    }
    
  }
}
