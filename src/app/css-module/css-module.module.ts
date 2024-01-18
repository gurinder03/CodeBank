import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssModuleRoutingModule } from './css-module-routing.module';
import { CssHomeComponent } from './css-home/css-home.component';
import { SharedModule } from '../shared/shared.module';
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
import { CssOutlineComponent } from './css-outline/css-outline.component';
import { CssTextComponent } from './css-text/css-text.component';
import { CssFontsComponent } from './css-fonts/css-fonts.component';


@NgModule({
  declarations: [
    CssHomeComponent,
    CssIntroComponent,
    CssSyntaxComponent,
    CssSelectorsComponent,
    CssHowToComponent,
    CssCommentsComponent,
    CssColorsComponent,
    CssBackgroundsComponent,
    CssBordersComponent,
    CssMarginsComponent,
    CssPaddingComponent,
    CssHeightWidthComponent,
    CssBoxModelComponent,
    CssOutlineComponent,
    CssTextComponent,
    CssFontsComponent
  ],
  imports: [
    CommonModule,
    CssModuleRoutingModule,
    SharedModule
  ]
})
export class CssModuleModule { }
