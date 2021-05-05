import { Injectable } from '@angular/core';
import {Utility} from '../enums/utility.enum';
import {AuthToken} from '../interfaces/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthLoaclStorageService {

  accessToken = 'access_token';
  refreshToken = 'refresh_token';
  idToken = 'id_token';


  constructor() {
  }

  public saveTokens(accessToken: string, refreshToken: string, idToken: string): void {
    localStorage.setItem(this.accessToken, accessToken);
    localStorage.setItem(this.refreshToken, refreshToken);
    localStorage.setItem(this.idToken, idToken);
  }

  public isLogin(): boolean {
    try {
      if (localStorage.getItem(this.accessToken)) {
        const token = localStorage.getItem(this.accessToken) || Utility.EMPTY;
        return true;
        // console.log(this.jwtHelper.isTokenExpired(token));
        // return !this.jwtHelper.isTokenExpired(token);
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  public getTokenAccessToken(): string {
    return localStorage.getItem(this.accessToken) || Utility.EMPTY;
  }

  public getTokenRefreshToken(): string {
    return localStorage.getItem(this.refreshToken) || Utility.EMPTY;
  }

  public getAuthTokenModel(): void {
    const authModel = {} as AuthToken;
    authModel.access_token = this.getTokenAccessToken();
    authModel.refresh_token = this.getTokenRefreshToken();
  }


  public removeAll(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }

  public resetTokens(authTokenModel: AuthToken): void {
    this.removeAll();
    this.saveTokens(authTokenModel.access_token, authTokenModel.refresh_token, authTokenModel.id_token);
  }
}
