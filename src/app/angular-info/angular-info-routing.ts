import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { AngularQuizComponent } from './angular-quiz/angular-quiz.component';


const routes: Routes = [{ path: 'dashboard', component: AngularDashboardComponent},
{path:'quiz',component:AngularQuizComponent},
{path: '', redirectTo: 'home', pathMatch:'full'}];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularInfoRoutingModule { }
