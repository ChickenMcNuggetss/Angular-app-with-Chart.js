import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPageComponent } from './chart-page.component';
import { ChartApiService } from '@features/chart/services/chart-api/chart-api.service';
import { of } from 'rxjs';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

describe('ChartPageComponent', () => {
  let component: ChartPageComponent;
  let fixture: ComponentFixture<ChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPageComponent],
      providers: [
        { provide: ChartApiService, useValue: { getPopulationData: () => of({ data: [], source: [] }) } },
        provideCharts(withDefaultRegisterables()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
