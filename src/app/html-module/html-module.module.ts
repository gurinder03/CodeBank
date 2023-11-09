import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlModuleRoutingModule } from './html-module-routing.module';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { HtmlEditorsComponent } from './html-editors/html-editors.component';
import { HtmlElementsComponent } from './html-elements/html-elements.component';
import { FormsModule } from '@angular/forms';
import { HtmlAttributesComponent } from './html-attributes/html-attributes.component';
import { HtmlHeadingsComponent } from './html-headings/html-headings.component';
import { HtmlParagraphsComponent } from './html-paragraphs/html-paragraphs.component';
import { HtmlStyleComponent } from './html-style/html-style.component';
import { HtmlFormattingComponent } from './html-formatting/html-formatting.component';
import { SharedModule } from '../shared/shared.module';
import { HtmlMetaTagsComponent } from './html-meta-tags/html-meta-tags.component';
import { HtmlQuotationsComponent } from './html-quotations/html-quotations.component';
import { HtmlCommentsComponent } from './html-comments/html-comments.component';
import { HtmlColorsComponent } from './html-colors/html-colors.component';
import { HtmlLinksComponent } from './html-links/html-links.component';
import { HtmlImagesComponent } from './html-images/html-images.component';



@NgModule({
  declarations: [
    HtmlComponent,
    HtmlIntroComponent,
    HtmlEditorsComponent,
    HtmlElementsComponent,
    HtmlAttributesComponent,
    HtmlHeadingsComponent,
    HtmlParagraphsComponent,
    HtmlStyleComponent,
    HtmlFormattingComponent,
    HtmlMetaTagsComponent,
    HtmlQuotationsComponent,
    HtmlCommentsComponent,
    HtmlColorsComponent,
    HtmlLinksComponent,
    HtmlImagesComponent
  ],
  imports: [
    CommonModule,
    HtmlModuleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HtmlModuleModule { }
