import { Component, OnInit } from '@angular/core';
import { fromEvent, of, pipe, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observdemo',
  templateUrl: './observdemo.component.html',
  styleUrls: ['./observdemo.component.css']
})
export class ObservdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   nums = of(1, 2, 3, 4, 5);
   msg=of(3,34,33,43);

  // Create a function that accepts an Observable.
  squareOddVals = pipe(filter((n: number) => n % 2 !== 0),map(n => n * n));

  // Create an Observable that will run the filter and map functions
   squareOdd = this.squareOddVals(this.nums).subscribe(x => console.log(x));

  time = new Observable<string>(observer => {setInterval(() => observer.next(new Date().toString()), 1000);});
 f= new Observable<string>(msg => { setInterval(() => msg.next("fdrgt"),1000);});
}
