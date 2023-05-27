import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouteConfigLoadEnd, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Register } from 'src/models/Register';
import { isNullOrUndefined } from 'util';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor(private router:Router, private mys:MyserviceService, private messageService: MessageService) { }

  ngOnInit() {
  }
  display='none';
  oprn:boolean;
  courseForm: NgForm;
  fromdata:Register[]=[];

  @Output('displaylogin') tologinform= new EventEmitter<any>();
 
  onSubmit(data:any) {
    let rdata = new Register();
      rdata.Username=data.uname;
      rdata.EmailAddress=data.uemail;
      rdata.Password=data.upass;
      rdata.Address=null;
      rdata.Gender=data.gender;
   this.fromdata.push(rdata);
    this.mys.RegisterUser(this.fromdata[0]).subscribe(data =>{
      if(!isNullOrUndefined(data)){
        let username=data['username'];
          sessionStorage.setItem('Username',username);
          this.mys.isloggedin.next(true);
        this.messageService.add({key: 'success', severity:'success', summary: 'Success Message', detail: data['status']});
        this.mys.isAuthenticated = true;
        setTimeout(() => {
          this.router.navigate(['Body']);
        }, 2000); 
      }
      
     
    else{
      this.mys.isloggedin.next(false);
      this.messageService.add({key: 'errors', severity:'error', summary: 'Authentication Error', detail:'User Already Exists!'});
      this.mys.isAuthenticated = false;
    }
    },error=>{
      this.messageService.add({key: 'errors', severity:'error', summary: 'Error', detail:"User Already Exists"});
    })
  }
  

  onClear() {
	// Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
	this.courseForm.reset();
  }

  routeTologin(){
    this.tologinform.emit({ displaylogin:true });
  }
}
