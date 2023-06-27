import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { TemplateformComponent } from './templateform/templateform.component';
import { ObservdemoComponent } from './observdemo/observdemo.component';
import { ContentComponent } from './main/content/content.component';
import {TableModule} from 'primeng/table';
import { AgGridModule } from 'ag-grid-angular';
import {ListboxModule} from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import {CalendarModule} from 'primeng/calendar';
import {StepsModule} from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { TreeModule } from 'primeng/tree';
import { LoginComponent } from './login/login.component';
import {TabViewModule} from 'primeng/tabview';
import { AuthguardGuard } from './authguard.guard';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HeaderComponent } from './shared/header/header.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { HomeComponent } from './home/home.component';
import { AuthinterceptorService } from './authinterceptor.service';
import { AngularInfoModule } from './angular-info/angular-info.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ReactiveformComponent,
    TemplateformComponent,
    ObservdemoComponent,
    ContentComponent,
    CustomHeaderComponent,
    LoginComponent,
    HeaderComponent,
    ViewprofileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    MaterialModule,
    TableModule,
    TabViewModule,
    ListboxModule,
    StepsModule,
    DropdownModule,
    TreeModule,
    ToastModule,
    MultiSelectModule,
    ChartModule,
    AngularInfoModule,
    AgGridModule.withComponents([])
  ],
  providers: [ MyserviceService, AuthguardGuard, MessageService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
