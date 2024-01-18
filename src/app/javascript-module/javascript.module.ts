import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptIntroComponent } from './javascript-intro/javascript-intro.component';
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JavascriptIntroComponent,
    JavascriptHomeComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    SharedModule
  ]
})
export class JavascriptModule { }
