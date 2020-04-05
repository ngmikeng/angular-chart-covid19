import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDataChartComponent } from './multi-data-chart.component';

describe('MultiDataChartComponent', () => {
  let component: MultiDataChartComponent;
  let fixture: ComponentFixture<MultiDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
