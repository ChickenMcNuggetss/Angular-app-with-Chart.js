import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceComponent } from './source.component';

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  const mockSource = {
    measures: [],
    annotations: {},
    name: '',
    substitutions: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('source', mockSource);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
