import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiDataList, TuiLoader } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { ChartService } from '@features/chart/services/chart/chart.service';
import { ChartApiService } from '@features/chart/services/chart-api/chart-api.service';
import { tap } from 'rxjs';
import { ChartType } from '@features/chart/enums/chart-types';
import { SourceComponent } from '../source/source.component';

const BORDER_COLOR = 'rgba(75,192,192,1)';
const BACKGROUND_COLOR = 'rgba(75,192,192,0.2)';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    BaseChartDirective,
    ReactiveFormsModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiLoader,
    SourceComponent,
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  private chartApiService = inject(ChartApiService);
  private chartService = inject(ChartService);
  private destroy = inject(DestroyRef);
  public population = this.chartService.population;
  public source = this.chartService.source;
  protected chartType = new FormControl<keyof ChartTypeRegistry>(ChartType.Line, { nonNullable: true });
  protected chartTypes: (keyof ChartTypeRegistry)[] = [ChartType.Line, ChartType.Bar, ChartType.Scatter];

  public lineChartData = computed<ChartData<keyof ChartTypeRegistry, number[], string>>(() => {
    return {
      labels: this.population().map((item) => item.Year),
      datasets: [
        {
          label: 'Population',
          data: this.population().map((item) => item.Population),
          borderColor: BORDER_COLOR,
          backgroundColor: BACKGROUND_COLOR,
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.3,
        },
      ],
    };
  });

  public lineChartOptions: ChartOptions<keyof ChartTypeRegistry> = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  protected get chartTypeValue() {
    return this.chartType.value;
  }

  public ngOnInit() {
    this.chartApiService
      .getPopulationData()
      .pipe(
        tap((populationData) => {
          this.chartService.setPopulationData(populationData);
        }),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe();
  }
}
