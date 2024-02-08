import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './main/content/content.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
{path:'contactus', component:ContactUsComponent},
{path:'Main',component:ContentComponent},
{path:'viewprofile',component:ViewprofileComponent},
{path:'angularinfo',loadChildren: () => import('./angular-info/angular-info.module').then(m => m.AngularInfoModule)},
{path: '', redirectTo: 'home', pathMatch:'full'}];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
