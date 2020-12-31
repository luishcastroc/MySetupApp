import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ILogin, IUserLogin } from '../_models';
import { IUserRegisterDto } from '../_models/register.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(login: ILogin): Observable<IUserLogin> {
    return this.http.post<IUserLogin>(`${this.baseUrl}/account/login`, login);
  }

  register(user: IUserRegisterDto): Observable<IUserLogin> {
    return this.http.post<IUserLogin>(`${this.baseUrl}/account/register`, user);
  }
}
