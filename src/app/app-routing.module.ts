import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rootPath = 'angular-chart-covid19';
const routes: Routes = [
  { path: `${rootPath}`, loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', redirectTo: `${rootPath}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
