import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/theme/material.module';
import { RoleGuardService } from 'src/app/core/services/role-guard.service';

const routes: Routes = [
	{
		path: '',
		component: UserManagementComponent,
		children: [
			{
				path: 'user-register',
				component: UserRegisterComponent,
				canActivate: [RoleGuardService],
				data: {
					expectedRole: ['USER', 'ADMIN']
				}
			},
			{
				path: 'user-detail',
				component: UserDetailComponent,
				canActivate: [RoleGuardService],
				data: {
					expectedRole: ['USER', 'ADMIN']
				}
			},
			{
				path: 'user-list',
				component: UserListComponent,
				canActivate: [RoleGuardService],
				data: {
					expectedRole: [ 'USER', 'ADMIN' ]
				}
			}
		]
	}
];

@NgModule({
  declarations: [UserManagementComponent, UserRegisterComponent, UserListComponent, UserDetailComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	MaterialModule
  ]
})
export class UserManagementModule { }
