import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { AngularInfoRoutingModule } from './angular-info-routing';
import { FormsModule } from '@angular/forms';
import { AngularQuizComponent } from './angular-quiz/angular-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AngularDashboardComponent, AngularQuizComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularInfoRoutingModule,
    HttpClientModule,
    RouterModule

  ]
})
export class AngularInfoModule { }
