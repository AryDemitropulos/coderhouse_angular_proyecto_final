import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$: Subject<boolean> = new Subject<boolean>();
  loading: boolean = false;
  constructor() {}

  getLoading() {
    return this.loading;
  }
  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(newValue: boolean): void {
    console.log('SET LOADING', newValue);
    this.loading = newValue;
    this.loading$.next(this.loading);
  }
}
