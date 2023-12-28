import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularComponent } from './angular/angular.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { ReactComponent } from './react/react.component';
import { CComponent } from './c/c.component';
import { CplusComponent } from './cplus/cplus.component';
import { NodeComponent } from './node/node.component';
import { SqlComponent } from './sql/sql.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { WeektrainingComponent } from './weektraining/weektraining.component';
import { MonthtrainingComponent } from './monthtraining/monthtraining.component';
import { FormComponent } from './form/form.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AbooutUsComponent } from './aboout-us/aboout-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'dot', component: DotnetComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'span', component: JqueryComponent },
  { path: 'elements', component: ReactComponent },
  { path: 'home', component: HomeComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about-us', component: AbooutUsComponent},
  { path: 'style',  component: CComponent },
  {
    path: 'html',
    loadChildren: () => import('./html-module/html-module.module').then(m => m.HtmlModuleModule),
  },
  {
    path: 'dotnet',
    loadChildren: () => import('./dot-net-module/dot-net-module.module').then(m => m.DotNetModuleModule),
  },
  {
    path: 'angularjs',
    loadChildren: () => import('./angular-js-module/angular-js-module.module').then(m => m.AngularJsModuleModule),
  },
  {
    path: 'css',
    loadChildren: () => import('./css-module/css-module.module').then(m => m.CssModuleModule),
  },
  {
    path: 'formatting',
    component: CplusComponent,
  },
  {
    path: 'headings',
    component: NodeComponent,
  },
  {
    path: 'introduction',
    component: SqlComponent,
  },
  {
    path: 'meta-tags',
    component: TypescriptComponent,
  },
  {
    path: 'week',
    component: WeektrainingComponent,
  },
  {
    path: 'month',
    component: MonthtrainingComponent,
  },
  {
    path: 'forum',
    component: FormComponent,
  },
  {
    path: 'forum-detail',
    component: ForumDetailsComponent,
  },
  {
    path: 'forum-list',
    component: ForumsListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'add-comment',
    component: AddCommentComponent,
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
