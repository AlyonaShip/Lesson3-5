import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = localStorage.getItem('userName');
    if (currentUser && (currentUser == 'Tyler' || currentUser == 'Marla')) {
      return true;
    }
    else {
      this.router.navigate(['/first']);
      return false;
    }
  }

  constructor(private router: Router) { }
}
