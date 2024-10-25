import { computed, Injectable, signal } from '@angular/core';
import { ApiResponse } from '@features/chart/interfaces/api-response';
import { NationData } from '@features/chart/interfaces/nation-data';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private readonly _nationData = signal<ApiResponse<NationData> | null>(null);

  public population = computed(() => this._nationData()?.data.reverse() ?? []);

  public source = computed(() => this._nationData()?.source ?? [])

  public setPopulationData(nationData: ApiResponse<NationData>) {
    this._nationData.set(nationData);
  }
}
