import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Credentials } from './model/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl =  'http://localhost:3000/login';
  public credentials: Credentials;
  constructor(private http: HttpClient) { }

  isLoggedIn = false;

  saveCredentials(credentials: Credentials) {
    this.credentials = credentials;
  }

  login(): Observable<boolean> {
    console.info('this.credentials', this.credentials);
    return this.http.post(this.loginUrl, this.credentials)
    .pipe(
      map(val => {
        this.isLoggedIn = true;
        return true;
      }),
      catchError( err => {
        this.isLoggedIn = false;
        console.warn('Failed log in:', err, ' -> ', this.isLoggedIn);
        return of(false);
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
