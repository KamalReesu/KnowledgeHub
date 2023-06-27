import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { AngularInfoRoutingModule } from './angular-info-routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AngularDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularInfoRoutingModule

  ]
})
export class AngularInfoModule { }
