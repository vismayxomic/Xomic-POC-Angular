import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/theme/material.module';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	}
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	MaterialModule
  ]
})
export class DashboardModule { }
