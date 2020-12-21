import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ISetupDto } from '../_models/setup.model';

@Injectable({
  providedIn: 'root',
})
export class SetupService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getSetups() {
    return this.http.get<ISetupDto[]>(
      `${this.baseUrl}/users/setups`
    );
  }
}
