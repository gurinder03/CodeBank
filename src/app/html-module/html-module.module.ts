import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlModuleRoutingModule } from './html-module-routing.module';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlEditorsComponent } from './html-editors/html-editors.component';
import { HtmlElementsComponent } from './html-elements/html-elements.component';




@NgModule({
  declarations: [
    HtmlComponent,
    HtmlIntroComponent,
    SidebarComponent,
    HtmlEditorsComponent,
    HtmlElementsComponent
   
  ],
  imports: [
    CommonModule,
    HtmlModuleRoutingModule,
  
  ]
})
export class HtmlModuleModule { }
