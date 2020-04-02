import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const LIB_MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
];
const COMPONENTS = [];

@NgModule({
  declarations: [
    ...COMPONENTS
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
