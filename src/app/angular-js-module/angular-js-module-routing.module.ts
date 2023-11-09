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
        component: AngularjsServicesComponent
      },
      {
        path: 'angularjs-tables',
        component: AngularjsTablesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularJsModuleRoutingModule { }
