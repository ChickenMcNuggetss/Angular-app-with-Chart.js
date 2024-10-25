import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@features/chart/interfaces/api-response';
import { NationData } from '@features/chart/interfaces/nation-data';

const BASE_URL = 'https://datausa.io/api';

@Injectable({
  providedIn: 'root',
})
export class ChartApiService {
  constructor(private http: HttpClient) {}

  public getPopulationData() {
    const params = {
      drilldowns: 'Nation',
      measures: 'Population',
    };
    return this.http.get<ApiResponse<NationData>>(`${BASE_URL}/data`, { params });
  }
}
