import { Component, OnInit } from '@angular/core';
import { AngualrInfoService } from '../angualr-info.service';
import { Question } from '../models';

@Component({
  selector: 'app-angular-quiz',
  templateUrl: './angular-quiz.component.html',
  styleUrls: ['./angular-quiz.component.scss']
})
export class AngularQuizComponent implements OnInit {
  questionno=1;
  questions:Question[];
  totalQuestions=0;
  constructor(private aiService:AngualrInfoService) { }

  ngOnInit() {
    this.aiService.getQuestions().subscribe( data => {
      this.questions=data['questions'];
      this.totalQuestions=this.questions.length;
    });
   // console.log(this.aiService.getQuestions());
  }

  onBtnClick(btnType:string,index:number){
    this.questionno=index;
    if(btnType === 'next'){
      if(this.questionno<this.totalQuestions-1){
        this.questionno++;
      }
    }else if(btnType === 'review'){
      this.questions[index].flag = this.questions[index].flag ? false: true;
    }else{
      if(this.questionno >1){
        this.questionno--;
      }
      
    }
  }

}
