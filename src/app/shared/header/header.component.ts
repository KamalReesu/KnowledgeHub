import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  count: number =0;
  tdate:any;
  isuserAuthenticated:boolean;
  showprofile:boolean;
  title:string;

  constructor(private router:Router,private mys:MyserviceService) { 
    //this.showprofile=this.mys.isAuthenticated;
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.isuserAuthenticated = this.mys.isAuthenticated;
  }

  ngOnInit() {
   // setInterval(()=>{this.tdate=new Date()},550);  
    this.mys.isloggedin.subscribe( e => { this.showprofile=e ,this.title=sessionStorage.getItem('Username')});
   
  }
  

  onIconClick(event){
    this.count++;
    //this.op1.toggle(event.event);
  }
  onLogout(){
    this.router.navigate(['/home']);
    this.mys.isloggedin.next(false);
  }

  onProfile(){
    this.router.navigate(['viewprofile']);
  }

}
