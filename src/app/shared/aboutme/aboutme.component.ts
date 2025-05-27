import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

  @ViewChildren('navbtnref') navBtnRef!:QueryList<ElementRef>;
  mapUrl:SafeResourceUrl;
  //https://www.google.com/maps/d/u/0/edit?mid=1yLzGpLF6zaH-NO6KkJrLap62ag-EW9s5U&usp=sharing
  navBtns =[
    {id:1,active:false, btnType:'AboutMe'},
    {id:2,active:false, btnType:'Academics'},
    {id:3,active:false, btnType:'Experience'},
    {id:4,active:false, btnType:'Projects'},
    {id:5,active:false, btnType:'Skills'}]

  constructor(private service:MyserviceService,private router:Router,private sanitizer:DomSanitizer) {
    // this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('www.google.com');

  }

  ngOnInit() {
  }

  showProjects(){
    this.service.fromProfile.next(true);
    this.router.navigateByUrl('home');
  }

  onNavBtnClick(idx:number){
    this.navBtns.forEach(e => e.active = false);
    this.navBtns[idx].active=true;
    console.log(this.navBtnRef);
  }
  scrollToTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  ngAfterViewInit(){
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

