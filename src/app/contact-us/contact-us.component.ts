import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
//import { Module } from 'ag-grid-community';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { MyserviceService } from '../myservice.service';
//import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
//import '@ag-grid-community/core/dist/styles/ag-grid.css';
//import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';
//import 'ag-grid-enterprise';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  public gridApi;
  public defaultColDef;
  public components;
  public editType;
  public gridColumnApi;
  public frameworkComponents;
  public rowModelType;
  public rowData=[{districts:'viskha'},{districts:'hyd'}];
 // public gridOptions:GridOptions;
  public states:string[]=[];
  public statelabels:string[]=[];

  public Covdata:states[]=[];
  cols: { field: string; header: string; }[];
  selectedColumns: any;

  cities:City[];
  selectedCities:City;
  data: { labels: string[]; datasets: { label: string; backgroundColor: string; borderColor: string; data: number[]; }[]; };
  //public modules: Module[] = [ServerSideRowModelModule];
  constructor(private mys:MyserviceService) { 
    //this.rowModelType = "serverSide";
    this.selectedCities={name:"Andhra Pradesh",code:'AP'};
    this.cols = [
      { field: 'district', header: 'District' },
      { field: 'confirmed', header: 'Confirmed' },
      { field: 'deceased', header: 'Deceased' },
      { field: 'recovered', header: 'Recovered' },
      { field: 'tested', header: 'Tested' },
      { field: 'vaccinated', header: 'Vaccinated' }
    ];
    this.selectedColumns= this.cols;
    this.cities = [ {name:'Andaman and Nicobar Islands',code:'AN'},
              {name:'Arunachal Pradesh',code:'AR'},
              {name:'Andhra Pradesh',code:'AP'},
              {name:'Assam',code:'AS'},
              {name:'Bihar',code:'BR'},
              {name:'Chandigarh',code:'CH'},
              {name:'Chhattisgarh',code:'CT'},
              {name:'Dadra and Nagar Haveli and Daman and Diu',code:'DN'},
              {name:'Delhi',code:'DL'},
              {name:'Goa',code:'GA'},
              {name:'Gujarat',code:'GJ'},
              {name:'Haryana',code:'HR'},
              {name:'Himachal Pradesh',code:'HP'},
              {name:'Jammu and Kashmir',code:'JK'},
              {name:'Jharkhand',code:'JH'},
              {name:'Karnataka',code:'KA'},
              {name:'Kerala',code:'KL'},
              {name:'Ladakh',code:'LA'},
              {name:'Lakshadweep',code:'LD'},
              {name:'Madhya Pradesh',code:'MP'},
              {name:'Maharashtra',code:'MH'},
              {name:'Manipur',code:'MN'},
              {name:'Meghalaya',code:'ML'},
              {name:'Mizoram',code:'MZ'},
              {name:'Nagaland',code:'NL'},
              {name:'Odisha',code:'OR'},
              {name:'Puducherry',code:'PY'},
              {name:'Punjab',code:'PB'},
              {name:'Rajasthan',code:'RJ'},
              {name:'Sikkim',code:'SK'},
              {name:'Tamil Nadu',code:'TN'},
              {name:'Telangana',code:'TG'},
              {name:'Tripura',code:'TR'},
              {name:'Uttar Pradesh',code:'UP'},
              {name:'Uttarakhand',code:'UT'},
              {name:'West Bengal', code:'WB'}];
     this.getTabledata();
     this.getBarData();
  }
  myclass:boolean=true;
  columnDefs = [
    
    {headerName: 'District', field: 'districts',width:200},
    {headerName: 'Total', field: 'total',width:200},
    // {headerName: 'EmailId', field: 'EmailId',sortable:true ,headerComponentParams: { filedName: 'EmailId' }},
    // {headerName: 'Designation', field: 'Designation',sortable:true,headerComponentParams: { filedName: 'Designation' }}
  ];

  ngOnInit() {
     //this.getTabledata();
     //this.getBarData();
  } 
  // onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  //   this.gridApi.setServerSideDatasource(serverSideDataSource(this));
  // }

  getTabledata(){
    this.Covdata=[];
    this.states=[];
    this.statelabels=[];
    this.mys.getCovidData().subscribe( data =>{
      let temp=[];
      temp=data[this.selectedCities['code']].districts;
      for(let e in temp){
        if(!isNullOrUndefined(temp[e].delta7)){
          this.states.push(e);
          this.statelabels.push(e);
          this.Covdata.push(temp[e]);
        } 
      }
       for(let i=0;i<this.Covdata.length;i++){
        this.Covdata[i].district = this.states[i];
       }
        //console.log(this.Covdata);
    })
  }

  getBarData(){
    console.log(this.statelabels);
    // let temp:string[]=[];
    // for(let i=0;i<this.states.length;i++){
    //   temp[i] = this.states[i];
    //  }
    this.data = {
      labels: this.statelabels,
      datasets: [
          {
              label: 'Confirmed',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Deceased',
              backgroundColor: 'red',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          },
          {
            label: 'Recovered',
            backgroundColor: 'green',
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Vaccinated',
          backgroundColor: 'blue',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
      }
      ]
  }
  }
}
export interface states{
  district:string;
  delta7:Covdata[];
  meta:Covdata[];
  total:Covdata[];
}
export interface Covdata{
  state?:string;
  confirmed?: string;
  deceased?: number;
  recovered?: number;
  tested?:number;
  vaccinated1?:number;
}
export class City{
  name:string;
  code:string;
}

function serverSideDataSource(req){
  return {
    getRows(data) {
      var rowCount;
      setTimeout(function () {
       req.mys.getCovidData().subscribe( data =>{
        console.log(data);
        req.rowData = data;
        req.successCallback(data); 
      })
      }, 500);
    },
  };
}
