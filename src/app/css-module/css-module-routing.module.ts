import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssHomeComponent } from './css-home/css-home.component';
import { CssIntroComponent } from './css-intro/css-intro.component';
import { CssSyntaxComponent } from './css-syntax/css-syntax.component';
import { CssSelectorsComponent } from './css-selectors/css-selectors.component';
import { CssHowToComponent } from './css-how-to/css-how-to.component';
import { CssCommentsComponent } from './css-comments/css-comments.component';
import { CssColorsComponent } from './css-colors/css-colors.component';
import { CssBackgroundsComponent } from './css-backgrounds/css-backgrounds.component';
import { CssBordersComponent } from './css-borders/css-borders.component';
import { CssMarginsComponent } from './css-margins/css-margins.component';
import { CssPaddingComponent } from './css-padding/css-padding.component';
import { CssHeightWidthComponent } from './css-height-width/css-height-width.component';
import { CssBoxModelComponent } from './css-box-model/css-box-model.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/css/css-home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/css-home',
        pathMatch: 'full',
      },
      {
        path: 'css-home',
        component: CssHomeComponent,
      },
      {
        path: 'css-intro',
        component: CssIntroComponent,
      },
      {
        path: 'css-syntax',
        component: CssSyntaxComponent,
      },
      {
        path: 'css-selectors',
        component: CssSelectorsComponent,
      },
      {
        path: 'css-how-to',
        component: CssHowToComponent,
      },
      {
        path: 'css-comments',
        component: CssCommentsComponent,
      },
      {
        path: 'css-colors',
        component: CssColorsComponent,
      },
      {
        path: 'css-backgrounds',
        component: CssBackgroundsComponent,
      },
      {
        path: 'css-borders',
        component: CssBordersComponent,
      },
      {
        path: 'css-margins',
        component: CssMarginsComponent,
      },
      {
        path: 'css-padding',
        component: CssPaddingComponent,
      },
      {
        path: 'css-height-width',
        component: CssHeightWidthComponent,
      },
      {
        path: 'css-box-model',
        component: CssBoxModelComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssModuleRoutingModule { }
