import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { JavascriptIntroComponent } from './javascript-intro/javascript-intro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/javascript/javascript-home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/javascript-home',
        pathMatch: 'full',
      },
      {
        path: 'javascript-home',
        component: JavascriptHomeComponent,
      },  
      {
        path: 'javascript-intro',
        component: JavascriptIntroComponent,
      }      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
