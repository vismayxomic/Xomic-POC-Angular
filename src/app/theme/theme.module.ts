import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AfterLoginLayoutComponent } from './after-login-layout/after-login-layout.component';
import { BeforeLoginLayoutComponent } from './before-login-layout/before-login-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BeforeLoginHeaderComponent } from './before-login-header/before-login-header.component';



@NgModule({
  declarations: [HeaderComponent,
        FooterComponent,
        SlidebarComponent,
        AfterLoginLayoutComponent,
        BeforeLoginLayoutComponent,
        BeforeLoginHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ThemeModule { }
