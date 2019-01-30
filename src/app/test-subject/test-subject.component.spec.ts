import { Subject } from 'rxjs/Subject';

describe('Test Subject', () => {
  const mySubject = new Subject();
  const arrayResultFromSubject: number[] = [];
  let resultFromSubject: number;
  test('should ', done => {
    mySubject.subscribe(x => {
      arrayResultFromSubject.push(x as number);
      resultFromSubject = x as number;
    });
    mySubject.next(1);
    expect(resultFromSubject).toEqual(1);
    mySubject.next(3);
    expect(resultFromSubject).toEqual(3);
    expect(arrayResultFromSubject).toEqual([1, 3]);
    done();
  });
});

describe('Test Subject as observable', () => {
  const mySubject = new Subject();
  const myObservable = mySubject.asObservable();
  let resultFromSubject: number;

  test('should subject return 1 ', done => {
    resultFromSubject = undefined;
    
    mySubject.subscribe(x => {
      resultFromSubject = x as number;
    });
    expect(resultFromSubject).toEqual(undefined);

    mySubject.next(1);

    expect(resultFromSubject).toEqual(1);
    done();
  });

  // The asObservable operator can be used to transform a subject 
  // into an observable.This can be useful when you’d like to expose the 
  // data from the subject, but at the same time prevent having data 
  // inadvertently pushed into the subject
  test('should observable from subject return 1 ', done => {
    resultFromSubject = undefined;

    myObservable.subscribe(x => {
      resultFromSubject = x as number;
    });
    expect(resultFromSubject).toEqual(undefined);

    mySubject.next(1);

    expect(resultFromSubject).toEqual(1);
    done();
  });
});
