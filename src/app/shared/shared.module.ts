import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { AboutmeComponent } from './aboutme/aboutme.component';



@NgModule({
  declarations: [HeaderComponent, AboutmeComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule {  }
