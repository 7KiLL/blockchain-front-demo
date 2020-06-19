import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {AuthApi} from './auth.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBehaviorSubject = new BehaviorSubject<IUser>(null);
  public user$ = this.userBehaviorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private api: AuthApi
  ) {
  }

  get activeUser(): IUser | null {
    return this.userBehaviorSubject.getValue();
  }
}
