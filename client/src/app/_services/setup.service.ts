import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISetupDto } from '@models/setup.model';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SetupService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getSetups(): Observable<ISetupDto[]> {
    return this.http.get<ISetupDto[]>(`${this.baseUrl}/setups`);
  }
}
