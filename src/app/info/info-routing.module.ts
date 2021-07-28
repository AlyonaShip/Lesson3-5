import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInfoComponent } from '../info/main-info/main-info.component';
import { AdditionalInfoComponent } from '../info/additional-info/additional-info.component';

const routes: Routes = [
  { path: '', component: MainInfoComponent },
  { path: 'add-info', component: AdditionalInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
