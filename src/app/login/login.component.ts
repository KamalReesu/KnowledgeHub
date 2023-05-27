import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  signUpform:boolean;
  loginform:boolean;
  
  constructor(private mys:MyserviceService) { 
   
   }
  ngAfterViewInit() {
    
  }

  ngOnInit() {
    this.mys.formType.subscribe( e => {this.onLogin(e) });
  }

  onLogin(type){
    if(type == "signup"){
      this.signUpform=true;
    }else{
      this.loginform=true;
    }
  }

}
