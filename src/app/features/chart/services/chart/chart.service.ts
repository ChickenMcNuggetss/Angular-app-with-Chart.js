import { Injectable, signal } from '@angular/core';
import { ApiResponse } from '@features/chart/interfaces/api-response';
import { NationData } from '@features/chart/interfaces/nation-data';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private readonly _population = signal<ApiResponse<NationData> | null>(null);

  public population = this._population.asReadonly();

  public setPopulationData(populationData: ApiResponse<NationData>) {
    this._population.set(populationData);
  }
}
