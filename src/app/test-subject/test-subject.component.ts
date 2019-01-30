import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.scss']
})
export class TestSubjectComponent implements OnInit {
  mySubject = new Subject();


  constructor() { }

  ngOnInit() {

  }

  initializeSubject() {
    this.mySubject.next(1);

    let subscription1 = this.mySubject.subscribe(x => {
      console.log('From subscription 1:', x);
    });
    
    // this.mySubject.next(2);
    
    // const subscription2 = this.mySubject.subscribe(x => {
    //   console.log('From subscription 2:', x);
    // });
    
    // this.mySubject.next(3);
    
    // this.subscription1.unsubscribe();
    
    // mySubject.next(4);
  }



}
