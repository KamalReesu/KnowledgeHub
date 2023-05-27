import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { ILoadingOverlayComponentAngularComp } from '@ag-grid-community/angular';
import { IHeaderGroupAngularComp } from 'ag-grid-angular';
import {OverlayPanel} from 'primeng/overlaypanel';
import { map } from 'rxjs/operators';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit  {
  params: any[]=[];
  
  constructor(private http:HttpClient,private elementref:ElementRef,private mys:MyserviceService) { }
  @ViewChild('accordion',{'static':true}) accordion;
  ngOnInit() {
   // const options = new HttpParams(year:'2012');
    this.http.get<any[]>('assets/cars.json?year=2012').subscribe(data =>{
      this.params = data['data'];
    })
    this.mys.getValues().subscribe( data =>{
      this.params=data;
    })
  }
  agInit(params): void {
    this.params = params;
  }
  openOverlaty(e,op:OverlayPanel){
    //op.toggle(e.event);
  }

  onTabclick(e){
    this.elementref.nativeElement.querySelector(".accordion").classList.add('active');
    let panel=this.elementref.nativeElement.querySelector(".panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.elementref.nativeElement.querySelector(".accordion").classList.remove('active');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }

}
