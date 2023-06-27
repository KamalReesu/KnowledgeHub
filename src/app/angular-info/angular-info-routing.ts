import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';


const routes: Routes = [{ path: 'dashboard', component: AngularDashboardComponent},

{path: '', redirectTo: 'home', pathMatch:'full'}];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularInfoRoutingModule { }
