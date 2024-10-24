import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList, TuiSelect } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { ChartTypeRegistry } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

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
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  protected chartType = new FormControl<keyof ChartTypeRegistry>('line', { nonNullable: true });
  protected chartTypes: (keyof ChartTypeRegistry)[] = ['line', 'bar', 'scatter'];

  protected get chartTypeValue() {
    return this.chartType.value;
  }

  populationData = {
    data: [
      { Year: '2022', Population: 331097593 },
      { Year: '2021', Population: 329725481 },
      { Year: '2020', Population: 326569308 },
      { Year: '2019', Population: 324697795 },
      { Year: '2018', Population: 322903030 },
      { Year: '2017', Population: 321004407 },
      { Year: '2016', Population: 318558162 },
      { Year: '2015', Population: 316515021 },
      { Year: '2014', Population: 314107084 },
      { Year: '2013', Population: 311536594 },
    ],
  };

  public lineChartData = {
    labels: this.populationData.data.map((item) => item.Year),
    datasets: [
      {
        label: 'Population',
        data: this.populationData.data.map((item) => item.Population),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  public lineChartOptions = {
    responsive: true,
  };
}
