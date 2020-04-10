import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	let expectedRoleArray = route.data;
	expectedRoleArray = expectedRoleArray.expectedRole;

	const userRoleFromToken  = this.authService.getCurrentUserRole();
	let  expectedRole = '';

	for (const i in expectedRoleArray ){
		if ( expectedRoleArray[i] === userRoleFromToken) {
		expectedRole = userRoleFromToken;
		}
	}

	if (this.authService.isAuthenticated() && userRoleFromToken === expectedRole) {
		return true;
	}

	this.router.navigate(['/authentication/login']);
	return false;
  }
}
