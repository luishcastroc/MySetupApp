import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IMemberDto } from '../_models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getMembers(): Observable<IMemberDto[]> {
    return this.http.get<IMemberDto[]>(`${this.baseUrl}/users`);
  }

  getMemberByName(username: string): Observable<IMemberDto> {
    return this.http.get<IMemberDto>(`${this.baseUrl}/users/${username}`);
  }

  getMemberById(id: number | undefined | null): Observable<IMemberDto> {
    return this.http.get<IMemberDto>(`${this.baseUrl}/users/${id}`);
  }
}
