import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, TreeNode } from 'primeng/api';
import { Login } from 'src/models/Login';
import { isNullOrUndefined } from 'util';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  username;
  emailId;
  password;
  country;
  files3:TreeNode[];
  selectedFiles2:TreeNode;
  LoginForm:FormGroup;
  @Output('displaylogin') tologinform= new EventEmitter<any>();
  cities2: { name: string; code: string; }[];
  constructor(private router:Router, private mys:MyserviceService, private messageService: MessageService) {
    this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    this.files3 =[{label:'India',children:[{label:'Mumbai'},{label:'Bihar'},{label:'Odisha'}]}]
   }
   city={name: 'New York', code: 'NY'};

  ngOnInit() {
    // sessionStorage.setItem('Username',null);
    //       sessionStorage.setItem('token',null);
      this.LoginForm=new FormGroup({
        username:new FormControl("",[Validators.required,Validators.minLength(4)]),
        emaild:new FormControl(""),
        city:new FormControl([this.city]),
        country:new FormControl(""),
        status:new FormControl("")
      });
      document.getElementById("loader").style.display="none";
  }
  displayname(data){
    // console.log(data);
    // alert("you have submitted the form");
  }

  onLogin($event){
    sessionStorage.setItem('Username',this.LoginForm.get('username').value);
    this.messageService.add({key: 'success', severity:'success', summary: 'Success Message', detail:'Login Successful'});
   
    setTimeout(() => {
      this.mys.isloggedin.next(true);
      this.mys.isAuthenticated=true;
      this.router.navigate(['contactus']);
    }, 2000); 
    if(this.LoginForm.get('username').value != null && this.LoginForm.get('emaild').value !=null ){
      let user = new Login();
      user.UserName = this.LoginForm.get('username').value;
      user.Password = this.LoginForm.get('emaild').value;
      sessionStorage.setItem("email",this.LoginForm.get('username').value);
      sessionStorage.setItem("password",this.LoginForm.get('emaild').value);
      this.mys.checkJWTtoken(user).subscribe( data =>{
        if(!isNullOrUndefined(data) ){
          let username=data['username'];
          sessionStorage.setItem('Username',username);
          sessionStorage.setItem('token',data['token']);
          this.mys.isloggedin.next(true);
          // document.getElementById("loader").style.display="block";
          // this.mys.spinner();
          this.messageService.add({key: 'success', severity:'success', summary: 'Success Message', detail:'Login Successful'});
          this.mys.isAuthenticated = true;
          setTimeout(() => {
            this.router.navigate(['contactus']);
          }, 2000); 
         
        }else{
          this.mys.isloggedin.next(false);
          this.messageService.add({key: 'errors', severity:'error', summary: 'Authentication Error', detail:'User Not Found'});
          this.mys.isAuthenticated = false;
        }
        
      },error=>{
        this.messageService.add({key: 'errors', severity:'error', summary: 'Error', detail:error});
      });
      
      
      // if(user.UserName != null && user.Password != null){
      //   this.mys.isloggedin.next(true);
      //   this.mys.isAuthenticated = true;
        
      //   localStorage.setItem('Username',user.UserName);
      //   localStorage.setItem('password',user.Password);
      //   document.getElementById("loader").style.display="block";
      //    this.mys.spinner();
      //   this.messageService.add({key: 'success', severity:'success', summary: 'Success Message', detail:'Login Successful'});
      //   setTimeout(() => {this.router.navigate(['contactus'])}, 4000);
      //   //;
      // }else{
      //   this.messageService.add({key: 'errors', severity:'error', summary: 'Authentication Error', detail:'User Not Found'});
      //   this.mys.isAuthenticated = false;
      // }
      
    }
  }
  routeTologin(){
    this.tologinform.emit({ displaylogin:true });
  }
}
