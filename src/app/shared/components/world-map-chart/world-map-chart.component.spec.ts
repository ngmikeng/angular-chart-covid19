import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapChartComponent } from './world-map-chart.component';

describe('WorldMapChartComponent', () => {
  let component: WorldMapChartComponent;
  let fixture: ComponentFixture<WorldMapChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldMapChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldMapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
