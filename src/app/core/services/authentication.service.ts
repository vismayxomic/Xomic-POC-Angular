import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  public isAuthenticated(): boolean {
	return  true;
  }

  public getCurrentUserRole(): string {
	return 'ADMIN';
  }

}
