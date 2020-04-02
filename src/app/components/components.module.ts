import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
