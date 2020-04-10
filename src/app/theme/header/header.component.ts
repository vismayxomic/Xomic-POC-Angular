import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'xomic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Role: string;
  isAuthenticated: boolean;

  constructor(authService: AuthenticationService) {
	this.Role = authService.getCurrentUserRole();
	this.isAuthenticated = authService.isAuthenticated();
   }

  ngOnInit(): void {
  }

  isRoleAdmin(): boolean {
	if ( this.Role === 'ADMIN'){
		return true;
	}else{
		return false;
	}
  }

  isRoleUser(): boolean{
	if ( this.Role === 'USER'){
		return true;
	}else{
		return false;
	}
  }

}
