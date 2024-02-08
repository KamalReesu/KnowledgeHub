import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngualrInfoService {

  constructor(private http:HttpClient) { }

  getQuestions():Observable<any[]> {
    return this.http.get<any>('assets/question-answer.json');
  
}
}
