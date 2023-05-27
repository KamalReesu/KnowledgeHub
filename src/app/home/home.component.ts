import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count:any;
  tdate: Date;
  showRoutes:boolean;

  constructor(private ele:ElementRef,private mys:MyserviceService,private router:Router) { 
    this.count=0;
    
  }
  
  ngOnInit() {
    setInterval(()=>{this.tdate=new Date()},550);
    
  }
  carousel(){
    let c=document.querySelectorAll(".mySlides");
    if(this.count<c.length && this.count>=1){
      c[this.count-1].setAttribute('style',"display:none");
      c[this.count].setAttribute('style',"display:block;width:100%");
      this.count+=1;
    }else if(this.count==c.length){
      c[this.count-1].setAttribute('style',"display:none");
      this.count=0;
      c[this.count].setAttribute('style',"display:block;width:100%");
      this.count+=1;
    }else{
      this.count=0;
      c[this.count].setAttribute('style',"display:block;width:100%");
      this.count+=1;
    }
  }
  onLogin(type:string){
    this.router.navigate(['login']);
    if(type == "login"){
      this.mys.formType.next("login");
    }else{
      this.mys.formType.next("signup");
    }
    this.showRoutes=true;  
    
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
 

