import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  url: string | ArrayBuffer = "./assets/Man_Avatar.jpg";

  constructor() { }

  
  ngOnInit() {
  }

  onUpload(e){
   const file= document.getElementById("fileUpload");
   file.click();
  }
  onFileSelection(ev){
    //document.querySelector("img").src=ev.target.value;
    this.readThis(ev.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload = () =>{
      this.url=myReader.result;
    }
    
  }
}
