import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { JavascriptIntroComponent } from './javascript-intro/javascript-intro.component';
import { JsWhereToComponent } from './js-where-to/js-where-to.component';
import { JsOutputComponent } from './js-output/js-output.component';
import { JsStatementsComponent } from './js-statements/js-statements.component';
import { JsSyntaxComponent } from './js-syntax/js-syntax.component';
import { JstCommentsComponent } from './jst-comments/jst-comments.component';
import { JsVariablesComponent } from './js-variables/js-variables.component';
import { JsLetComponent } from './js-let/js-let.component';
import { JsConstComponent } from './js-const/js-const.component';
import { JsOperatorsComponent } from './js-operators/js-operators.component';
import { JsArithmeticComponent } from './js-arithmetic/js-arithmetic.component';
import { JsAssignmentComponent } from './js-assignment/js-assignment.component';
import { JsDataTypesComponent } from './js-data-types/js-data-types.component';
import { JsFunctionsComponent } from './js-functions/js-functions.component';

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
      },
      {
        path: 'js-where-to',
        component: JsWhereToComponent,
      },          
      {
        path: 'javaScript-output',
        component: JsOutputComponent,
      },          
      {
        path: 'javaScript-statements',
        component: JsStatementsComponent,
      },          
      {
        path: 'js-syntax',
        component: JsSyntaxComponent,
      },        
      {
        path: 'js-comments',
        component: JstCommentsComponent,
      },         
      {
        path: 'js-variables',
        component: JsVariablesComponent,
      },          
      {
        path: 'js-let',
        component: JsLetComponent,
      },          
      {
        path: 'js-const',
        component: JsConstComponent,
      },          
      {
        path: 'js-operators',
        component: JsOperatorsComponent,
      },          
      {
        path: 'js-arithmetic',
        component: JsArithmeticComponent,
      },          
      {
        path: 'js-assignment',
        component: JsAssignmentComponent,
      },          
      {
        path: 'js-data-types',
        component: JsDataTypesComponent,
      },         
      {
        path: 'js-functions',
        component: JsFunctionsComponent,
      }          
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
