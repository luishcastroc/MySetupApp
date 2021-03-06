import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMemberDto } from '@models/member.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

  getMemberById(id: number): Observable<IMemberDto> {
    return this.http.get<IMemberDto>(`${this.baseUrl}/users/${id}`);
  }
}
