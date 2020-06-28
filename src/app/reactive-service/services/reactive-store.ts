import { BehaviorSubject, Observable } from 'rxjs';

export abstract class ReactiveStore<T> {
  private _state$: BehaviorSubject<T>;

  protected constructor(defaults: T) {
    this._state$ = new BehaviorSubject(defaults);
  }

  public get state$(): Observable<T> {
    return this._state$.asObservable();
  }

  public setState(nextState: T): void {
    this._state$.next(nextState);
  }

  public getState(): T {
    return this._state$.getValue();
  }
}
