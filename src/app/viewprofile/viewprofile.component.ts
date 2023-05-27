import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Login } from 'src/models/Login';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  constructor(private fb:FormBuilder,private mys:MyserviceService,private messageService:MessageService,private router:Router) { }

  coachregisterForm:FormGroup;
  formDisplay: boolean =false;
  coachId: string;
  errorMessage: string;

  ngOnInit() {
    this.getUserDetails();
    this.coachregisterForm = this.fb.group({
      cname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      emailaddress: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      address: ['',[Validators.required]],
      // gender:['Male',Validators.required],
      // mobileNumber:['',Validators.required,,Validators.minLength(10)],
      // speciality:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]]
    })
  }
  onRegister(){
    this.formDisplay=true;
    console.log(this.coachregisterForm.value);
  }

  onProfileInfoEdit(e){
    document.querySelectorAll("input").forEach(e =>e.disabled=false);
    document.querySelector("textarea").disabled=false;
  }

  onClose(){
    this.router.navigate(['Body']);
  }

  getUserDetails(){
    let user = new Login();
    user.UserName = sessionStorage.getItem("email");
    user.Password = sessionStorage.getItem("password");
    this.mys.viewProfile(user).subscribe((data) : void => {
      this.messageService.add({key: 'success', severity:'success', summary: 'Success Message', detail:data.status});
      this.coachregisterForm.setValue({cname:data.user.username,emailaddress:data.user.emailAddress,address:data.user.address})
    },error =>{
      this.messageService.add({key: 'errors', severity:'error', summary: 'Error', detail:error});
    })
  }

}
