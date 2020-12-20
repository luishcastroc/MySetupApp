import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IMemberDto } from '../_models/member.model';
import { ISetupDto } from '../_models/setup.model';

@Injectable({
  providedIn: 'root',
})
export class SetupService {
  baseUrl: string = environment.baseUrl;
  token = JSON.parse(localStorage.getItem('application.user')!).token;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    }),
  };
  constructor(private http: HttpClient) {}

  getSetups() {
    return this.http.get<ISetupDto[]>(
      `${this.baseUrl}/users/setups`,
      this.httpOptions
    );
  }
}
