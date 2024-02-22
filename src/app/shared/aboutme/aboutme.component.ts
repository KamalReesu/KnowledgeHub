import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private service:MyserviceService,private router:Router) { }

  ngOnInit() {
  }

  showProjects(){
    this.service.fromProfile.next(true);
    this.router.navigateByUrl('home');
  }

}
