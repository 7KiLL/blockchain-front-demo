import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApi {
  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {
  }

  login() {
    // todo
  }
}
