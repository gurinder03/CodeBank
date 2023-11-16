import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularJsModuleRoutingModule } from './angular-js-module-routing.module';
import { AngularIntroComponent } from './angular-intro/angular-intro.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { SharedModule } from '../shared/shared.module';
import { AngularjsExpressionComponent } from './angularjs-expression/angularjs-expression.component';
import { AngularjsModulesComponent } from './angularjs-modules/angularjs-modules.component';
import { AngularjsDirectivesComponent } from './angularjs-directives/angularjs-directives.component';
import { AngularjsModelComponent } from './angularjs-model/angularjs-model.component';
import { AngularjsDatabindingComponent } from './angularjs-databinding/angularjs-databinding.component';
import { AngularjsControllersComponent } from './angularjs-controllers/angularjs-controllers.component';
import { AngularjsScopesComponent } from './angularjs-scopes/angularjs-scopes.component';
import { AngularjsFiltersComponent } from './angularjs-filters/angularjs-filters.component';
import { AngularjsServicesComponent } from './angularjs-services/angularjs-services.component';
import { AngularjsHttpComponent } from './angularjs-http/angularjs-http.component';
import { AngularjsTablesComponent } from './angularjs-tables/angularjs-tables.component';
import { AngularjsSelectComponent } from './angularjs-select/angularjs-select.component';
import { AngularjsSqlComponent } from './angularjs-sql/angularjs-sql.component';
import { AngularjsDomComponent } from './angularjs-dom/angularjs-dom.component';
import { AngularjsEventsComponent } from './angularjs-events/angularjs-events.component';
import { AngularjsFormsComponent } from './angularjs-forms/angularjs-forms.component';
import { AngularjsValidationComponent } from './angularjs-validation/angularjs-validation.component';
import { AngularjsApiComponent } from './angularjs-api/angularjs-api.component';
import { AngularjsIncludesComponent } from './angularjs-includes/angularjs-includes.component';
import { AngularjsAnimationsComponent } from './angularjs-animations/angularjs-animations.component';
import { AngularjsRoutingComponent } from './angularjs-routing/angularjs-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AngularIntroComponent,
    AngularHomeComponent,
    AngularjsExpressionComponent,
    AngularjsModulesComponent,
    AngularjsDirectivesComponent,
    AngularjsModelComponent,
    AngularjsDatabindingComponent,
    AngularjsControllersComponent,
    AngularjsScopesComponent,
    AngularjsFiltersComponent,
    AngularjsServicesComponent,
    AngularjsHttpComponent,
    AngularjsTablesComponent,
    AngularjsSelectComponent,
    AngularjsSqlComponent,
    AngularjsDomComponent,
    AngularjsEventsComponent,
    AngularjsFormsComponent,
    AngularjsValidationComponent,
    AngularjsApiComponent,
    AngularjsIncludesComponent,
    AngularjsAnimationsComponent,
    AngularjsRoutingComponent,
  ],
  imports: [
    CommonModule,
    AngularJsModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AngularJsModuleModule { }
