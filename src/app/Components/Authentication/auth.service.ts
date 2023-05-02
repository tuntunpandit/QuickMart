import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://dummyjson.com';
  isUserLoggedin: boolean = false;
  user: User | Object;
  constructor(private _http: HttpClient) {}

  login(username: string, password: string) {
    return this._http.post(`${this.baseUrl}/auth/login`, {
      username,
      password,
    });
  }

  storeDataInLocalStorage(data: any, key: string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getDataFromLocalStorage(key: string) {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : '';
  }

  isuserLoggedIn() {
    const user = this.getDataFromLocalStorage('user');
    return user?.token ? true : false;
  }
}
