import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChartType, defaultChartType } from '@features/chart/enums/chart-types';
import { TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule, TuiSelectModule } from '@taiga-ui/legacy';
import { ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-chart-form',
  standalone: true,
  imports: [ReactiveFormsModule, TuiDataList, TuiDataListWrapper, TuiTextfieldControllerModule, TuiSelectModule],
  templateUrl: './chart-form.component.html',
  styleUrl: './chart-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartFormComponent {
  public chartTypeChange = output<keyof ChartTypeRegistry>();
  protected chartType = new FormControl<keyof ChartTypeRegistry>(defaultChartType, { nonNullable: true });
  protected chartTypes: (keyof ChartTypeRegistry)[] = [ChartType.Line, ChartType.Bar, ChartType.Scatter];

  constructor() {
    this.chartType.valueChanges.pipe(takeUntilDestroyed()).subscribe((chartType) => {
      this.chartTypeChange.emit(chartType);
    });
  }
}
