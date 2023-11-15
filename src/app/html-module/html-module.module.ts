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
import { HtmlFaviconComponent } from './html-favicon/html-favicon.component';
import { HtmlPageTitleComponent } from './html-page-title/html-page-title.component';
import { HtmlTablesComponent } from './html-tables/html-tables.component';
import { HtmlListsComponent } from './html-lists/html-lists.component';
import { HtmlBlockInlineComponent } from './html-block-inline/html-block-inline.component';
import { HtmlDivComponent } from './html-div/html-div.component';
import { HtmlClassesComponent } from './html-classes/html-classes.component';


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
    HtmlImagesComponent,
    HtmlFaviconComponent,
    HtmlPageTitleComponent,
    HtmlTablesComponent,
    HtmlListsComponent,
    HtmlBlockInlineComponent,
    HtmlDivComponent,
    HtmlClassesComponent,
  ],
  imports: [
    CommonModule,
    HtmlModuleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HtmlModuleModule { }
