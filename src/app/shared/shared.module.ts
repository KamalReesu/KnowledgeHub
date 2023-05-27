import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    OverlayPanelModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule {  }
