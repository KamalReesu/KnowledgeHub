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
    this.showprofile=this.mys.isAuthenticated;
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.isuserAuthenticated = this.mys.isAuthenticated;
  }

  ngOnInit() {
   setInterval(()=>{this.tdate=new Date()},550);  
    this.mys.isloggedin.subscribe( e => { this.showprofile=e ,this.title=sessionStorage.getItem('Username')});
   
  }
  

  onIconClick(event){
    this.count++;
    //this.op1.toggle(event.event);
  }
  onLogout(){
    this.mys.isAuthenticated=false;
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },1000)
    
    this.mys.isloggedin.next(false);
  }

  onProfile(){
    this.router.navigate(['viewprofile']);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
   // document.body.style.backgroundColor = "darkSlateGrey";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
  }

  barClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
