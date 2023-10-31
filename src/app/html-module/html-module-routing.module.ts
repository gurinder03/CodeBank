import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { HtmlEditorsComponent } from './html-editors/html-editors.component';
import { HtmlElementsComponent } from './html-elements/html-elements.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/html/html-tutorial',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/html-tutorial',
        pathMatch: 'full',
      },
      {
        path: 'html-tutorial',
        component: HtmlComponent,
      },
      {
        path: 'html-intro',
        component: HtmlIntroComponent
      },
      {
        path: 'html-editors',
        component: HtmlEditorsComponent
      },
      {
        path: 'html-elements',
        component:HtmlElementsComponent
      }
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
