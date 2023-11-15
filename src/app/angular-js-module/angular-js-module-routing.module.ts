import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { AngularIntroComponent } from './angular-intro/angular-intro.component';
import { AngularjsExpressionComponent } from './angularjs-expression/angularjs-expression.component';
import { AngularjsModulesComponent } from './angularjs-modules/angularjs-modules.component';
import { AngularjsDirectivesComponent } from './angularjs-directives/angularjs-directives.component';
import { AngularjsModelComponent } from './angularjs-model/angularjs-model.component';
import { AngularjsDatabindingComponent } from './angularjs-databinding/angularjs-databinding.component';
import { AngularjsControllersComponent } from './angularjs-controllers/angularjs-controllers.component';
import { AngularjsScopesComponent } from './angularjs-scopes/angularjs-scopes.component';
import { AngularjsFiltersComponent } from './angularjs-filters/angularjs-filters.component';
import { AngularjsServicesComponent } from './angularjs-services/angularjs-services.component';
import { AngularjsTablesComponent } from './angularjs-tables/angularjs-tables.component';
import { AngularjsHttpComponent } from './angularjs-http/angularjs-http.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/angularjs/angularjs-tutorial',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/angularjs-tutorial',
        pathMatch: 'full',
      },
      {
        path: 'angularjs-tutorial',
        component: AngularHomeComponent,
      },
      {
        path: 'angularjs-intro',
        component: AngularIntroComponent
      },
      {
        path: 'angularjs-expression',
        component: AngularjsExpressionComponent
      },
      {
        path: 'angularjs-modules',
        component: AngularjsModulesComponent
      },
      {
        path: 'angularjs-directive',
        component: AngularjsDirectivesComponent
      },
      {
        path: 'angularjs-model',
        component: AngularjsModelComponent
      },
      {
        path: 'angularjs-databinding',
        component: AngularjsDatabindingComponent
      },
      {
        path: 'angularjs-controllers',
        component: AngularjsControllersComponent
      },
      {
        path: 'angularjs-scopes',
        component: AngularjsScopesComponent
      },
      {
        path: 'angularjs-filters',
        component: AngularjsFiltersComponent
      },
      {
        path: 'angularjs-services',
        component: AngularjsServicesComponent
      },
      {
        path: 'angularjs-http',
        component: AngularjsHttpComponent
      },
      {
        path: 'angularjs-tables',
        component: AngularjsTablesComponent
      },
      {
        path: 'angularjs-select',
        component: AngularjsSelectComponent
      },
      {
        path: 'angularjs-sql',
        component: AngularjsSqlComponent
      },
      {
        path: 'angularjs-dom',
        component: AngularjsDomComponent
      },
      {
        path: 'angularjs-events',
        component: AngularjsEventsComponent
      },
      {
        path: 'angularjs-forms',
        component: AngularjsFormsComponent
      },
      {
        path: 'angularjs-validation',
        component: AngularjsValidationComponent
      },
      {
        path: 'angularjs-api',
        component: AngularjsApiComponent
      },
      {
        path: 'angularjs-includes',
        component: AngularjsIncludesComponent
      },
      {
        path: 'angularjs-animations',
        component: AngularjsAnimationsComponent
      },
      {
        path: 'angularjs-routing',
        component: AngularjsRoutingComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularJsModuleRoutingModule { }
