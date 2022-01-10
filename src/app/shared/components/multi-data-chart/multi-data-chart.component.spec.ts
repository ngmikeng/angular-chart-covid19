import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiDataChartComponent } from './multi-data-chart.component';

describe('MultiDataChartComponent', () => {
  let component: MultiDataChartComponent;
  let fixture: ComponentFixture<MultiDataChartComponent>;

  beforeEach(waitForAsync(() => {
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
