import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterLoginLayoutComponent } from './theme/after-login-layout/after-login-layout.component';


const routes: Routes = [
	{path: 'authentication',
	loadChildren: () => import('../app/pages/authentication/authentication.module').then(m => m.AuthenticationModule)},
  	{
		path: '',
		component: AfterLoginLayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'user-management',
				loadChildren: () => import('../app/pages/user-management/user-management.module').then(m => m.UserManagementModule),
			}
		],
	},
	{
		path: '**', redirectTo: 'authentication/login'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
