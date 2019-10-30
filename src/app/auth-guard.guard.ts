import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  public constructor(public auth: AuthService) {}
  canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLoggedIn || this.auth.login();
  }
}
