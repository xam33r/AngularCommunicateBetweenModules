import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

    private lazyMessage = new BehaviorSubject<any>('');
    private moreLazyMessage = new BehaviorSubject<any>('');

    sayLazy(lazy)
    {
        console.log(lazy);
        this.lazyMessage.next(lazy);
    }

    emitLazy():Observable<any>
    {
        return this.lazyMessage.asObservable();
    }

    sayMoreLazy(moreLazy)
    {
        console.log(moreLazy);
        this.moreLazyMessage.next(moreLazy);
    }

    emitMoreLazy():Observable<any>
    {
        return this.moreLazyMessage.asObservable();
    }
}