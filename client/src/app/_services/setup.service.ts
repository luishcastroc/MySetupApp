import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ISetupDto } from '../_models/setup.model';

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
