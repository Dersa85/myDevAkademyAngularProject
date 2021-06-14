import { DataProtectionComponent } from './data-protection/data-protection.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
