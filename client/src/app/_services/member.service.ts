import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IMemberDto } from '../_models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<IMemberDto[]>(`${this.baseUrl}/users`);
  }

  getMember(username: string) {
    return this.http.get<IMemberDto>(`${this.baseUrl}/users/${username}`);
  }
}
