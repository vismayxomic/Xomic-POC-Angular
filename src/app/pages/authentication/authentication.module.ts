import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './login-page/login-page.component';
import { LogoutpageComponent } from './logout-page/logout-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginLayoutComponent } from 'src/app/theme/before-login-layout/before-login-layout.component';
import { MaterialModule } from 'src/app/theme/material.module';

const routes: Routes = [
	{
		path: '',
		component: BeforeLoginLayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginpageComponent
			},
			{
				path: 'logout',
				component: LogoutpageComponent
			}
		]
	}
];


@NgModule({
  declarations: [LoginpageComponent, LogoutpageComponent],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
	MaterialModule
  ]
})
export class AuthenticationModule { }
