import { Component, ViewChild } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Car } from './car';
import { HttpClient } from '@angular/common/http';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // encapsulation: ViewEncapsulation.ShadowDom

})
export class AppComponent {
  show:boolean=false;
  
  cities:any[]=[];
  
  selectedCities:any[];

  //@ViewChild('aggrid')  agGrid: AgGridAngular;

  @ViewChild('op1',{ read:null,static:true}) op1;
  @ViewChild('eid',{ read:null,static:true}) eid;

  title:String = 'knowledge-hub';

  tdate:any;
  cars:Car[];
  cols:any[];
  count:number=0;
 
 
 


rowData :any;
  items: MenuItem[];
  employees: string[];
  
  constructor(private mYs:MyserviceService,private http:HttpClient){
    // this.defaultColDef = {flex: 1,editable: true,};
    // this.components = { numericCellEditor: this.getNumericCellEditor() };
    // this.editType = 'fullRow';
    // this.frameworkComponents = { agColumnHeader: CustomHeaderComponent };
    this.mYs.getHero().subscribe(data=>{console.log(data)})
  }

  

  ngOnInit() {
     this.getdata();
    
    //this.mYs.getCarsSmall().then(cars => this.cars = cars);
    //this.rowData=this.http.get<Car[]>('assets/demo.json');
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.items = [{
    label: 'Personal',
    routerLink: 'personal'
},
{
    label: 'Seat',
    routerLink: 'seat'
},
{
    label: 'Payment',
    routerLink: 'payment'
},
{
    label: 'Confirmation',
    routerLink: 'confirmation'
}
];
   } 
   
  

  //  onBtStopEditing() {
  //   this.gridApi.stopEditing();
  // }
  getNumericCellEditor() {
    function isCharNumeric(charStr) {
      return !!/\d/.test(charStr);
    }
    function isKeyPressedNumeric(event) {
      var charCode = getCharCodeFromEvent(event);
      var charStr = String.fromCharCode(charCode);
      return isCharNumeric(charStr);
    }
    function getCharCodeFromEvent(event) {
      event = event || window.event;
      return typeof event.which === 'undefined' ? event.keyCode : event.which;
    }
    function NumericCellEditor() {}
    NumericCellEditor.prototype.init = function(params) {
      this.focusAfterAttached = params.cellStartedEdit;
      this.eInput = document.createElement('input');
      this.eInput.style.width = '100%';
      this.eInput.style.height = '100%';
      this.eInput.value = isCharNumeric(params.charPress)
        ? params.charPress
        : params.value;
      var that = this;
      this.eInput.addEventListener('keypress', function(event) {
        if (!isKeyPressedNumeric(event)) {
          that.eInput.focus();
          if (event.preventDefault) event.preventDefault();
        }
      });
    };
    NumericCellEditor.prototype.getGui = function() {
      return this.eInput;
    };
    NumericCellEditor.prototype.afterGuiAttached = function() {
      if (this.focusAfterAttached) {
        this.eInput.focus();
        this.eInput.select();
      }
    };
    NumericCellEditor.prototype.isCancelBeforeStart = function() {
      return this.cancelBeforeStart;
    };
  
    NumericCellEditor.prototype.isCancelAfterEnd = function() {};
    NumericCellEditor.prototype.getValue = function() {
      return this.eInput.value;
    };
  
    NumericCellEditor.prototype.focusIn = function() {
      var eInput = this.getGui();
      eInput.focus();
      eInput.select();
      console.log('NumericCellEditor.focusIn()');
    };
  
    NumericCellEditor.prototype.focusOut = function() {
      console.log('NumericCellEditor.focusOut()');
    };
    return NumericCellEditor;
  
}
btnsc(){
  document.getElementById("div2").style.backgroundColor="red";
}
onIconClick(event){
  this.count++;
  //this.op1.toggle(event.event);
}

searchEmployee(){
  if(this.eid.nativeElement.value == ""|| this.eid.nativeElement.value == undefined ||this.eid.nativeElement.value == null){
    this.getdata();
  }else{
    this.mYs.getEmployeeById(this.eid.nativeElement.value.trim()).subscribe( data =>{
      this.rowData = data;
    })
  }
  
}
getdata(){
  // this.mYs.getAllEmployee().subscribe(
  //   data =>{
  //     this.rowData = data;
  //   }
  // )
}


}
function status(params) {
  if(params.value="Orange"){
    return '<div> <i class=\"fas fa-file\"></i></div><span>'+ params.value +'</span>'
  }
 
}