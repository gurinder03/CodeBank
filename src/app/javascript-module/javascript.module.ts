import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptIntroComponent } from './javascript-intro/javascript-intro.component';
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { SharedModule } from '../shared/shared.module';
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


@NgModule({
  declarations: [
    JavascriptIntroComponent,
    JavascriptHomeComponent,
    JsWhereToComponent,
    JsOutputComponent,
    JsStatementsComponent,
    JsSyntaxComponent,
    JstCommentsComponent,
    JsVariablesComponent,
    JsLetComponent,
    JsConstComponent,
    JsOperatorsComponent,
    JsArithmeticComponent,
    JsAssignmentComponent,
    JsDataTypesComponent,
    JsFunctionsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    SharedModule
  ]
})
export class JavascriptModule { }
