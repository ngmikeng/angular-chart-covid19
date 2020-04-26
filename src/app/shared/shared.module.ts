import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';

import { MultiDataChartComponent } from './components/multi-data-chart/multi-data-chart.component';
import { WorldMapChartComponent } from './components/world-map-chart/world-map-chart.component';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const LIB_MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatDividerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,

  HighchartsChartModule,
  TranslateModule
];
const COMPONENTS = [
  MultiDataChartComponent,
  WorldMapChartComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES,
    ...LIB_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...LIB_MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
