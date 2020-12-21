import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IMemberDto } from '../_models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.baseUrl;
  token = JSON.parse(localStorage.getItem('application.user')!)
    ? JSON.parse(localStorage.getItem('application.user')!).token
    : null;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    }),
  };
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<IMemberDto[]>(
      `${this.baseUrl}/users`,
      this.httpOptions
    );
  }

  getMember(username: string) {
    return this.http.get<IMemberDto>(
      `${this.baseUrl}/users/${username}`,
      this.httpOptions
    );
  }
}
