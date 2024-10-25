import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiLoader } from '@taiga-ui/core';
import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartService } from '@features/chart/services/chart/chart.service';
import { ChartApiService } from '@features/chart/services/chart-api/chart-api.service';
import { tap } from 'rxjs';
import { SourceComponent } from '../source/source.component';
import { ChartFormComponent } from '../chart-form/chart-form.component';
import { defaultChartType } from '@features/chart/enums/chart-types';

const BORDER_COLOR = 'rgba(75,192,192,1)';
const BACKGROUND_COLOR = 'rgba(75,192,192,0.2)';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective, TuiLoader, SourceComponent, ChartFormComponent],
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
  public chartType = signal<keyof ChartTypeRegistry>(defaultChartType);

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

  public onChartTypeChange(chartType: keyof ChartTypeRegistry) {
    this.chartType.set(chartType);
  }
}
