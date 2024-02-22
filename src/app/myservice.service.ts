import { Injectable } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Car, Herpc } from './car';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Login } from 'src/models/Login';
import { Register } from 'src/models/Register';
import { catchError } from 'rxjs/operators';
import { ServerResponse } from 'src/models/ServerResponse';
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  openssl=`$env:NODE_OPTIONS="--openssl-legacy-provider`;
  url = 'http://localhost:54143/Api/Employee'; 
  private headers: HttpHeaders;
  public isAuthenticated:boolean;

  public isloggedin = new Subject<boolean>();
  public fromProfile = new Subject<boolean>();

  public formType = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  getCarsSmall() {
    return this.http.get<any>('assets/cars.json')
                .toPromise()
                .then(res => <Car[]> res.data)
                .then(data => { return data; });
  
}

getHero(){
  return this.http.get<Herpc>('assets/demo.json');
}
getAllEmployee(): Observable<any[]> {  
  return this.http.get<any[]>(this.url + '/AllEmployeeDetails');  
}  
getEmployeeById(employeeId: string): Observable<any> {  
  return this.http.get<any>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
}

AuthenticateUser(usercred:Login):Observable<Response> {
  let url ='http://localhost:54143/Api/Login/UserLogin';
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(usercred);
  return this.http.post<Response>(url,body,{'headers':headers});
}

RegisterUser(user:Register){
  let url ='https://localhost:44378/api/register';
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(user);
  return this.http.post<any>(url,body,{'headers':headers});
}

getCovidData(){
  let url ='https://api.covid19india.org/v4/min/data.min.json';
  return this.http.get<any[]>(url);
}
spinner(){
  setTimeout(()=>{document.getElementById("loader").style.display="none"},3000);
}

checkJWTtoken(user: Login){
  
  let url ='https://localhost:44378/api/login';
   
  const body=JSON.stringify({"Username":user.UserName,"Password": user.Password});
  return this.http.post<any>(url,body,{'headers':this.headers}).pipe(
    catchError(this.handleError)
  );
}

viewProfile(user: Login): Observable<ServerResponse>{
  
  let url ='https://localhost:44378/api/Viewprofile';
   
  var querystring= $.param(JSON.parse(JSON.stringify({"Username":user.UserName,"Password": user.Password})));
  querystring=querystring.replace(/%5B%5D/gi,"");
  return this.http.get<ServerResponse>(url+'?'+querystring,{'headers':this.headers}).pipe(
    catchError(this.handleError)
  );
}
getValues(){
  
  let url ='https://localhost:44378/api/values';
   
  //const body=JSON.stringify({"Username":user.UserName,"Password": user.Password});
  return this.http.get<any[]>(url,{'headers':this.headers}).pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something went wrong please try again later.');
}
}
